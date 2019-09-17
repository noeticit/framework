<template>
    <GmapMap
        :center="{lat: 24.326176, lng: 78.187721}"
        :zoom="5"
        map-type-id="terrain"
        style="height: 600px"

    >
        <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @mouseover="infoWinOpen=true">
        </gmap-info-window>

        <gmap-cluster>
            <GmapMarker
                :key="index"
                v-for="(m, index) in MapData.data"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="toggleInfoWindow(m,index)"
            />
        </gmap-cluster>

    </GmapMap>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/markerclustererplus/2.1.4/markerclusterer.js"></script>

<script>
    import * as VueGoogleMaps from 'vue2-google-maps'
    import GmapCluster from 'vue2-google-maps/dist/components/cluster'

    Vue.component('GmapCluster', GmapCluster)
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
        props: ['MapData'],
        data() {
            return {
                infoWindowPos: null,
                infoWinOpen: false,
                infoContent: '',
                currentMidx: null,
                infoOptions: {
                    content: '',
                    slug:'',
                    //optional: offset infowindow so it visually sits nicely on top of our marker
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                markers: [
                    {position: { lat: 22.1960365, lng: 75.7061635 } }
                ]
            }
        },
        methods:{
            toggleInfoWindow: function (marker, idx) {
                this.infoWindowPos = marker.position;
                this.infoOptions.content = this.getInfoWindowContent(marker);

                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;
                }
            },
            showProfile(slug){
                let route = this.$router.resolve({ name: 'Biltrax__project-profile', params: { slug: slug}})
                window.open(route.href, '_blank');
            },
            // toggleInfoWindow: function(marker, idx) {
            //     this.infoWindowPos = marker.position;
            //     this.infoOptions.content = marker.name;
            //     //check if its the same marker that was selected if yes toggle
            //     if (this.currentMidx == idx) {
            //         this.infoWinOpen = !this.infoWinOpen;
            //     }
            //     //if different marker set infowindow to open and reset current marker index
            //     else {
            //         this.infoWinOpen = true;
            //         this.currentMidx = idx;
            //     }
            // }
                        getInfoWindowContent: function (marker) {
                            return (`<div class="card">

                             <div class="card-content">
                                <div class="media">
                                  <div class="media-content">
                                    <a target="_blank" href="${'/admin/plugins/Biltrax/project-profile/'+marker.slug}" class="title is-4">${marker.name}</a>
                                 </div>
                                </div>
                              </div>
                             </div>`);
                        },
        }
    }
</script>

<style scoped>

</style>
