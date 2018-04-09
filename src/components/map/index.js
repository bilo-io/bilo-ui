import React, { Component } from 'react';
import L from 'leaflet';
import './style.scss';

var map = {}
var pointLayer = [];
var lineLayer = [];

export default class Map extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.initMap();
    }
    render() {
        return (
            <div className='map-container'>
                <div id='leafletmap' className='map-component'>
                    <div className='map-children'>
                        {this.props.children}</div>
                    </div>
            </div>
        )
    }
    initMap() {
        let style = this.props.theme || 'streets';
        let token = 'pk.eyJ1IjoiYmlsb2x3YWJvbmEiLCJhIjoiY2l5eWN5Z2EwMDAwaDMzcXhpczllYzRtdiJ9.rfFcy4B00uukeTntIJLeGg';
        let tileLayer = L.tileLayer(`https://api.tiles.mapbox.com/v4/mapbox.${style}/{z}/{x}/{y}.png?access_token=${token}`, {
            attribution: '',
            maxZoom: 18,
            id: 'your.mapbox.project.id',
            accessToken: 'your.mapbox.public.access.token'
        });
        map = new L.Map('leafletmap', {
            zoomControl: false,
            attributionControl: false,
        })
            .setView(this.props.center || [-33.915835, 18.420381], this.props.zoom || 5)
            .addLayer(tileLayer);
    }
    clearMap() {
        pointLayer.forEach((layer) => {
            map.removeLayer(layer);
        })
        pointLayer = [];

        lineLayer.forEach((layer) => {
            map.removeLayer(layer);
        })
        lineLayer = [];
    }
}