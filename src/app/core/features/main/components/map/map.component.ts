import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import MarkerClusterer from '@google/markerclustererplus';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../../../../../shared/models/shared.models';
import { takeUntil } from 'rxjs/operators';
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
export class MapComponent implements AfterViewInit, OnDestroy {

  @Output() searchUsersAround: EventEmitter<SearchByLocationModel> = new EventEmitter<SearchByLocationModel>();

  @ViewChild('map', {static: false}) mapElement: ElementRef;

  map: google.maps.Map;
  currentUser$: Observable<UserModel> = this.userDataService.userData;
  foundUsers$: Observable<UserModel[]> = this.searchUsersService.userList$;
  markers: Marker[];
  markersClusterer: MarkerClusterer;
  destroyer$: Subject<void> = new Subject<void>();

  constructor(private router: Router,
              private userDataService: UserDataService,
              private searchUsersService: SearchUsersService) {
  }

  ngAfterViewInit() {
    this.currentUser$.pipe(takeUntil(this.destroyer$)).subscribe(user => {
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
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    this.initClusterer();
  }

  updateMarkers(users: UserModel[]) {
    this.cleanMarkers();
    this.markers = [...users.map(user => {
      const marker = customMarker(user);
      marker.addListener('click', () => this.router.navigate(['profile', user.id]));
      return marker;
    })];
    this.markersClusterer.addMarkers(this.markers);
  }

  initClusterer(): void {
    this.markersClusterer = new MarkerClusterer(this.map, [], {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    });
  }

  cleanMarkers(): void {
    this.markersClusterer.clearMarkers();
  }

  ngOnDestroy() {
    this.destroyer$.next();
  }

}
