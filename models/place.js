export class Place {
    constructor(title, imageUri, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address;
        this.location = { lat: location.lat, lng: location.log };  // {lat:0.141232,lng:122.322}
        this.id = new Date().toString() + Math.random().toString();
    }
}