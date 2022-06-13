class Booking {
    datePicaker = () => {
        new mds.MdsPersianDateTimePicker( document.getElementById( "booking_choose_date" ), {
            targetTextSelector: '#booking_choose_date_append',
            // targetDateSelector: '[data-name="dtp1-date"]',
            // placement: 'left',
            // monthsToShow: [2,2],
            englishNumber: true,
            disabled: false,
            // selectedDate: date, //new Date('2022, 00, 23, 11,50,45'),
            disableBeforeToday: true,
            disableAfterToday: false,
            modalMode: false,
            yearOffset: 0,
            // enableTimePicker: true,
            // onClickEvent: function() {
            //     homework_config.flag_edit = true; //when click back button show alert
            // }
        });
    }

    timePicker = ( id, id_append ) => {
        mdtimepicker( id , {
            format: 'hh:mm',
            is24hour: false,
            events: {
                shown: function () {
                    // $('#ibv_vb_time_publish_content_maker_input').parent().addClass('active');
                },
                hidden: function () {
                    // $('#ibv_vb_time_publish_content_maker_input').parent().removeClass('active');
                },
                timeChanged: ( e ) => {
                    document.querySelector( id_append ).value = e.value;
                }
            },
            btnCancelContent: 'لغو',
            btnOkContent: 'تایید',
        });
    }

    get bookingForm() {
        return document.getElementById( "booking_form" );
    }

    validateTime() {
        const booking_start_time = document.getElementById( "booking_start_time_append" ).value;
        const booking_end_time   = document.getElementById( "booking_end_time_append" ).value;

        //convert hours to minute

        let start = booking_start_time.split( ":" );
        start = ( start[ 0 ] * 60 ) + ( start[ 1 ] * 1 );

        let end = booking_end_time.split( ":" );
        end = ( end[ 0 ] * 60 ) + ( end[ 1 ] * 1 );

        if ( booking_end_time > booking_start_time ) return { start: booking_start_time, end: booking_end_time, total: end - start };

        this.bookingForm.insertAdjacentHTML( "afterbegin", alert_html_rtl( "danger", "زمان خروج باید بعد از زمان ورود باشد!" ) );
        return false;
    }

    totalNumberPatientHandler = () => {
        const form = this.bookingForm;
        if ( form.querySelector( ".alert" ) ) {
            form.querySelector( ".alert" ).remove();
        }

        const time = this.validateTime();
        if ( ! time ) return;

        const time_each = document.getElementById( "booking_time_each_patient" ).value;
        if ( ! time_each || parseInt( time_each ) < 1 ) {
            this.bookingForm.insertAdjacentHTML( "afterbegin", alert_html_rtl( "danger", "زمان ویزیت هر بیمار را به درستی وارد کنید" ) );
            return;
        }

        const total_number = Math.floor( time.total / time_each );
        document.getElementById( "booking_number_total_patient" ).value = total_number;

        return {
            time: time,
            time_each: time_each,
            total_number: total_number,
        }
    }

    totalNumberPatient = () => {
        document.getElementById( "booking_time_each_patient" ).addEventListener( "keyup", this.totalNumberPatientHandler );
    }

    init = () => {
        this.datePicaker();
        this.timePicker( "#booking_start_time", "#booking_start_time_append" );
        this.timePicker( "#booking_end_time", "#booking_end_time_append" );
        this.totalNumberPatient();
    }

    static run = () => {
        const booking = new Booking;
        booking.init();
    }
}

init = () => {
    Booking.run();
}

doc_ready( init );