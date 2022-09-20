const GOOGLE_API_KEY = "AIzaSyCBA3QjqtAM4NzkoEU_PadG4XyuK5GSvGs"
export function getMapPreview(lat, lon) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lon}
    &key=${GOOGLE_API_KEY}&signature=Sarik`;

    return imagePreviewUrl;
}

const Map_Box = "pk.eyJ1Ijoic2FyaWthbndhciIsImEiOiJja3ZhdjZraXQwOXRoMzFxZ3d2MHdpa3RmIn0.WDKdW0rm8nfgCIzRmf_8GA"

export function MapBox(lat, lon) {
    const imagePreviewUrla = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lat},${lon},0,60/400x200?access_token=pk.eyJ1Ijoic2FyaWthbndhciIsImEiOiJja3ZhdjZraXQwOXRoMzFxZ3d2MHdpa3RmIn0.WDKdW0rm8nfgCIzRmf_8GA`;
    return imagePreviewUrla;

}