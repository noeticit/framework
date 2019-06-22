<template>
    <GmapMap
            :center="{lat: 22.1960365, lng: 75.7061635}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 800px; height: 600px"

    >
        <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
        />
    </GmapMap>
</template>

<script>
    import * as VueGoogleMaps from 'vue2-google-maps'

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyA0QMehpL3LRC-SQX7fWma0nK-qzrUQVXo',
            libraries: 'places', // This is required if you use the Autocomplete plugin
            // OR: libraries: 'places,drawing'
            // OR: libraries: 'places,drawing,visualization'
            // (as you require)

            //// If you want to set the version, you can do so:
            // v: '3.26',
        },

        //// If you intend to programmatically custom event listener code
        //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
        //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
        //// you might need to turn this on.
        // autobindAllEvents: false,

        //// If you want to manually install components, e.g.
        //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
        //// Vue.component('GmapMarker', GmapMarker)
        //// then disable the following:
        // installComponents: true,
    })

    export default {
        name: "google-map",
        data() {
            return {
                // mapOptions: {
                //     styles: [
                //         {elementType: 'geometry', stylers: [{color: '#5d78ff'}]},
                //         {elementType: 'labels.text.stroke', stylers: [{color: '#5d78ff'}]},
                //         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                //         {
                //             featureType: 'administrative.locality',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#d59563'}]
                //         },
                //         {
                //             featureType: 'poi',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#d59563'}]
                //         },
                //         {
                //             featureType: 'poi.park',
                //             elementType: 'geometry',
                //             stylers: [{color: '#263c3f'}]
                //         },
                //         {
                //             featureType: 'poi.park',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#6b9a76'}]
                //         },
                //         {
                //             featureType: 'road',
                //             elementType: 'geometry',
                //             stylers: [{color: '#38414e'}]
                //         },
                //         {
                //             featureType: 'road',
                //             elementType: 'geometry.stroke',
                //             stylers: [{color: '#212a37'}]
                //         },
                //         {
                //             featureType: 'road',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#9ca5b3'}]
                //         },
                //         {
                //             featureType: 'road.highway',
                //             elementType: 'geometry',
                //             stylers: [{color: '#746855'}]
                //         },
                //         {
                //             featureType: 'road.highway',
                //             elementType: 'geometry.stroke',
                //             stylers: [{color: '#1f2835'}]
                //         },
                //         {
                //             featureType: 'road.highway',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#f3d19c'}]
                //         },
                //         {
                //             featureType: 'transit',
                //             elementType: 'geometry',
                //             stylers: [{color: '#2f3948'}]
                //         },
                //         {
                //             featureType: 'transit.station',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#d59563'}]
                //         },
                //         {
                //             featureType: 'water',
                //             elementType: 'geometry',
                //             stylers: [{color: '#17263c'}]
                //         },
                //         {
                //             featureType: 'water',
                //             elementType: 'labels.text.fill',
                //             stylers: [{color: '#515c6d'}]
                //         },
                //         {
                //             featureType: 'water',
                //             elementType: 'labels.text.stroke',
                //             stylers: [{color: '#17263c'}]
                //         }
                //     ]
                // },
                markers: [
                    {position: { lat: 22.1960365, lng: 75.7061635 } }
                ]
            }
        },
        methods: {
            marker() {

            }
        }
    }
</script>

<style scoped>

</style>
