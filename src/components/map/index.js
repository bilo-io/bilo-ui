import React, { Component } from 'react';
import PropTypes from 'prop-types'
import L from 'leaflet';
import './style.scss';

var map = {}
var pointLayer = [];
var lineLayer = [];

export const propTypesMap = {
    center: PropTypes.array,
    theme: PropTypes.string,
    zoom: PropTypes.number
}
export default class Map extends Component {
    static propTypes = {
        ...propTypesMap
    }
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.initMap();
    }
    render() {
        const { center, children, theme, zoom } = this.props
        return (
            <div className='map-container'>
                <div id='leafletmap' className='map-component'>
                    <div className='map-children'>
                        {children}</div>
                    </div>
            </div>
        )
    }
    initMap() {
        let style = theme || 'streets';
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
            .setView(center || [-33.915835, 18.420381], zoom || 5)
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