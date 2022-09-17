class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;  // {lat:0.141232,lng:122.322}
        this.id = new Date().toString() + Math.random().toString();
    }
}