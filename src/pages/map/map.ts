import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

declare var google;
// let map: any;
// let infowindow: any;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  // @ViewChild('map') mapElement: ElementRef;
  map: any;
  markers: any;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;
  loading: any;
  // radius: string;
  // raduis: string;
  // type: string;
  // url2: string;
  // url1: string;
  // apiKey: string;
  // searchItem: string;

  // map: any;
  // // 51.521993, -0.176755london
  // // latt: any = 24.882894;khi
  // // lng: any = 67.0842607;
  // latt: any = 51.521993;
  // lng: any = 0.176755;


  // marker: any = []
  // autocompleteItems: any = [];
  // searchResults: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public zone: NgZone) {


    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

    // this.apiKey = "AIzaSyBMhVhgEGm_pQhuKk_P_d4sX98fGplTBNU";
    // this.type = "train_station";
    // this.radius = "50000";
    // this.url1 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + this.latt + "," + this.lng + "&radius=" + this.radius + "&type=" + this.type + "&key=" + this.apiKey;
    // this.url2 = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken="
    // this.httpRequest(this.url1);
  }

  ionViewDidEnter() {
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.9011, lng: -56.1645 },
      zoom: 15
    });
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MapPage');
  //   this.initMap();
  // }

  // // initMap() {
  // //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  // //     zoom: 7,
  // //     center: { lat: 41.85, lng: -87.65 }
  // //   });

  // //   this.directionsDisplay.setMap(this.map);
  // // }

  // // calculateAndDisplayRoute() {
  // //   this.directionsService.route({
  // //     origin: this.start,
  // //     destination: this.end,
  // //     travelMode: 'DRIVING'
  // //   }, (response, status) => {
  // //     if (status === 'OK') {
  // //       this.directionsDisplay.setDirections(response);
  // //     } else {
  // //       window.alert('Directions request failed due to ' + status);
  // //     }
  // //   });
  // // }

  // goBack() {
  //   this.navCtrl.pop()
  // }

  // httpRequest(url) {

  //   this.http.get(url)
  //     .subscribe(
  //       response => {
  //         console.log(response)
  //         // for (var j = 0; j < response.results.length; j++) {
  //         //   this.searchResults.push(response.results[j]);
  //         // }


  //         // if (response.next_page_token !== null && response.next_page_token !== " " && response.next_page_token !== undefined) {
  //         //   var url = this.url2 + response.next_page_token + "&key=" + this.apiKey;
  //         //   console.log(url)
  //         //   this.httpRequest(url)
  //         // }
  //       },
  //       error => { },
  //       () => { }
  //     );
  //   //   .then((response) => {
  //   //   // console.log(response)
  //   //   for (var j = 0; j < response.results.length; j++) {
  //   //     this.searchResults.push(response.results[j]);
  //   //   }


  //   //   if (response.next_page_token !== null && response.next_page_token !== " " && response.next_page_token !== undefined) {
  //   //     var url = this.url2 + response.next_page_token + "&key=" + this.apiKey;
  //   //     console.log(url)
  //   //     this.httpRequest(url)
  //   //   }
  //   //   // console.log(this.searchResults);


  //   // })






  // }








  // initMap() {
  //   var pyrmont = {
  //     lat: 24.882894,
  //     lng: 67.0842607
  //   };
  //   map = new google.maps.Map(this.mapElement.nativeElement, {
  //     center: pyrmont,
  //     zoom: 15
  //   });

  //   var service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch({
  //     location: pyrmont,
  //     radius: 180000,
  //     type: ['train_station']
  //   }, (results, status) => {
  //     console.log(results)
  //     this.autocompleteItems = [];
  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (var i = 0; i < results.length; i++) {
  //         this.autocompleteItems.push(results[i])

  //       }
  //     }
  //   });
  // }



  // selectSearchResult(result) {
  //   // lat: 24.882894,
  //   //   lng: 67.0842607

  //   this.searchItem = result.name;
  //   this.searchResults = [];
  //   this.createMarker(result);
  // }
  // updateSearchResults() {
  //   if (this.searchItem == '') {
  //     this.searchResults = [];
  //     return;
  //   }
  //   this.searchResults = [];
  //   this.httpRequest(this.url1);
  // }
  // createMarker(place) {

  //   var placeLoc = place.geometry.location;
  //   map = new google.maps.Map(this.mapElement.nativeElement, {
  //     center: placeLoc,
  //     zoom: 15
  //   });
  //   // console.log(placeLoc);
  //   var image = {
  //     url: place.icon,
  //     size: new google.maps.Size(71, 71),
  //     origin: new google.maps.Point(0, 0),
  //     anchor: new google.maps.Point(17, 34),
  //     scaledSize: new google.maps.Size(25, 25)
  //   };
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: placeLoc,
  //     icon: image
  //   });
  //   console.log(place);
  //   // marker.push(marker);
  //   map.setCenter(placeLoc);
  //   // this.map.panToCenter()

  //   // google.maps.event.addListener(marker, 'click', function() {
  //   // infowindow.setContent(place.name);
  //   // infowindow.open(map, this);
  //   // infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
  //   //   'Place ID: ' + place.place_id + '<br>' +
  //   //   place.vicinity + '</div>');
  //   // infowindow.open(map, this);
  //   // });
  // }

}
