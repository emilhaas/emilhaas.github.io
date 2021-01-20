var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
            color: '#ffff00',
        });
    } else {
        highlightLayer.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 1
        });
    }
}
var map = L.map('map', {
    zoomControl: true, maxZoom: 28, minZoom: 1
}).fitBounds([[43.358896911187585, -6.740591078745197], [43.69402474569462, -6.106082378745199]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });
var measureControl = new L.Control.Measure({
    position: 'topleft',
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'hectares'
});
measureControl.addTo(map);
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
    .innerHTML = '';
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
    .className += ' fas fa-ruler';
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_GoogleSatelite_0');
map.getPane('pane_GoogleSatelite_0').style.zIndex = 400;
var layer_GoogleSatelite_0 = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleSatelite_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_GoogleSatelite_0;
map.addLayer(layer_GoogleSatelite_0);
map.createPane('pane_OpenStreetMap_1');
map.getPane('pane_OpenStreetMap_1').style.zIndex = 401;
var layer_OpenStreetMap_1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_1',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_1;
map.addLayer(layer_OpenStreetMap_1);
function pop_Ruinas_2(feature, layer) {
    layer.on({
        mouseout: function (e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
                    <tr>\
                        <td colspan="2"><strong>Name</strong><br />' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Type</strong><br />' + (feature.properties['Type'] !== null ? autolinker.link(feature.properties['Type'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><strong>Description</strong><br />' + (feature.properties['Descript'] !== null ? autolinker.link(feature.properties['Descript'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
    layer.bindPopup(popupContent, { maxHeight: 400 });
}

function style_Ruinas_2_0(feature) {
    switch (String(feature.properties['Type'])) {
        case 'Cabana de Braña':
            return {
                pane: 'pane_Ruinas_2',
                radius: 6.000000000000002,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,82,59,1.0)',
                interactive: true,
            }
            break;
        case 'Casa':
            return {
                pane: 'pane_Ruinas_2',
                radius: 6.000000000000002,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,186,59,1.0)',
                interactive: true,
            }
            break;
        case 'Casa de Indianos':
            return {
                pane: 'pane_Ruinas_2',
                radius: 6.000000000000002,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(157,255,59,1.0)',
                interactive: true,
            }
            break;
        case 'Casona':
            return {
                pane: 'pane_Ruinas_2',
                radius: 6.000000000000002,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(61,168,255,1.0)',
                interactive: true,
            }
            break;
        case 'Escuela':
            return {
                pane: 'pane_Ruinas_2',
                radius: 6.000000000000002,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(210,61,255,1.0)',
                interactive: true,
            }
            break;
    }
}
map.createPane('pane_Ruinas_2');
map.getPane('pane_Ruinas_2').style.zIndex = 402;
map.getPane('pane_Ruinas_2').style['mix-blend-mode'] = 'normal';
var layer_Ruinas_2 = new L.geoJson(json_Ruinas_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Ruinas_2',
    layerName: 'layer_Ruinas_2',
    pane: 'pane_Ruinas_2',
    onEachFeature: pop_Ruinas_2,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Ruinas_2_0(feature));
    },
});
bounds_group.addLayer(layer_Ruinas_2);
map.addLayer(layer_Ruinas_2);
var baseMaps = {};
L.control.layers(baseMaps, { 'Ruinas<br /><table><tr><td style="text-align: center;"><img src="css/images/Ruinas_2_CabanadeBrana0.png" /></td><td>Cabana de Braña</td></tr><tr><td style="text-align: center;"><img src="css/images/Ruinas_2_Casa1.png" /></td><td>Casa</td></tr><tr><td style="text-align: center;"><img src="css/images/Ruinas_2_CasadeIndianos2.png" /></td><td>Casa de Indianos</td></tr><tr><td style="text-align: center;"><img src="css/images/Ruinas_2_Casona3.png" /></td><td>Casona</td></tr><tr><td style="text-align: center;"><img src="css/images/Ruinas_2_Escuela4.png" /></td><td>Escuela</td></tr></table>': layer_Ruinas_2, "OpenStreetMap": layer_OpenStreetMap_1, "Google Satelite": layer_GoogleSatelite_0, }, { collapsed: false }).addTo(map);
setBounds();