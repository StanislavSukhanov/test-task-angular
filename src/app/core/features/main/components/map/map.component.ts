import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import MarkerClusterer from '@google/markerclusterer';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../../../../shared/models/shared.models';
import { debounceTime, tap } from 'rxjs/operators';
import { computeDistanceBetween } from 'spherical-geometry-js';
import { SearchByLocationModel } from '../../models/main.models';
import { customMarker } from '../../helpers/map-popup';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { SearchUsersService } from '../../services/search-users.service';
import Marker = google.maps.Marker;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements AfterViewInit {

  @Output() searchUsersAround: EventEmitter<SearchByLocationModel> = new EventEmitter<SearchByLocationModel>();

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: google.maps.Map;
  searchValue$: Subject<any> = new Subject<any>();
  currentUser$: Observable<UserModel> = this.userDataService.userData;
  foundUsers$: Observable<UserModel[]> = this.searchUsersService.userList$;
  markers: Marker[];

  constructor(private router: Router,
              private userDataService: UserDataService,
              private searchUsersService: SearchUsersService) {
  }

  ngAfterViewInit() {

    this.searchValue$.pipe(
      debounceTime(300),
      tap(val => this.searchUsersAround.emit(val))
    ).subscribe();

    this.currentUser$.subscribe(user => {
      if (user) {
        this.initMap(user.lat, user.lon);
      }
    });
    this.foundUsers$.subscribe((users: UserModel[]) => {
      if (this.map) {
        this.updateMarkers(users);
      }
    });
  }

  initMap(lat, lng): void {
    const mapProperties = {
      center: new google.maps.LatLng(lat, lng),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.map.addListener('bounds_changed', () => {

      const center = this.map.getCenter();
      const bound = this.map.getBounds().getNorthEast();

      const radius = computeDistanceBetween(center, bound) / 1000;
      this.searchValue$.next({radius, center: {lat: center.lat(), lon: center.lng()}});
    });
  }

  updateMarkers(users: UserModel[]) {
    this.cleanMarkers();
    this.markers = [...users.map(user => {
      const marker = customMarker(user);
      marker.addListener('click', () => this.router.navigate(['']));
      return marker;
    })];

    // tslint:disable-next-line:no-unused-expression
    new MarkerClusterer(this.map, this.markers, {
      imagePath:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    });
  }

  cleanMarkers(): void {
    this.markers.forEach(marker => marker.setMap(null));
  }

}
