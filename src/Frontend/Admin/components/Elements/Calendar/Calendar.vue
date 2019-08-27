<template>
    <div :id="identity"></div>
</template>

<script>
    import {KTApp} from 'NitsTheme/framework/lib/app';
    import {KTUtil} from 'NitsTheme/framework/lib/util';

    require('fullcalendar');

    export default {
        name: "Calendar",
        props: ['identity', 'events'],
        mounted() {

            const self = this;

            var KTCalendarListView = function() {

                return {
                    //main function to initiate the module
                    init: function() {

                        $('#'+self.identity).fullCalendar({
                            isRTL: KTUtil.isRTL(),
                            header: {
                                left: 'prev,next today',
                                center: 'title',
                                right: 'month,agendaDay,listWeek'
                            },
                            defaultView: 'listWeek',
                            editable: true,
                            eventLimit: true, // allow "more" link when too many events
                            navLinks: true,
                            height: 900,
                            events: self.events,

                            eventRender: function(event, element) {
                                if (element.hasClass('fc-day-grid-event')) {
                                    element.data('content', event.description);
                                    element.data('placement', 'top');
                                    KTApp.initPopover(element);
                                } else if (element.hasClass('fc-time-grid-event')) {
                                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                                } else if (element.find('.fc-list-item-title').lenght !== 0) {
                                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>');
                                }
                            }
                        });
                    }
                };
            }();

            jQuery(document).ready(function() {
                KTCalendarListView.init();
            });
        },
        render(createElement) {
            return createElement('div', {
                attrs: {id: this.identity}
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../../../../../../../../node_modules/fullcalendar/dist/fullcalendar.css';
    @import "./../../../theme/framework/config";
    @import "./../../../theme/framework/components/vendors/fullcalendar/_fullcalendar.scss";
</style>
