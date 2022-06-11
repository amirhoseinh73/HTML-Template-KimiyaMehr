class Alert {
    static error( code ) {
        switch ( parseInt( code ) ) {

            default :
                return "اطلاعات را صحیح وارد کنید.";
            case 101 :
                return "لطفا نام خود را وارد کنید.";
            case 102 :
                return "لطفا نام خانوادگی خود را وارد کنید.";
            case 103 :
                return "لطفا شماره همراه خود را صحیح وارد کنید.";
            case 104 :
                return "لطفا رمز عبور خود را حداقل 6 کاراکتر وارد کنید.";
            case 105 :
                return "تکرار رمز عبور صحیح نیست.";
            case 106 :
                return "نوع کاربری خود را مشخص گنید.";
            case 107 :
                return "کد تایید باید عدد 6 رقمی باشد.";
            case 108 :
                return "لطفا آدرس ایمیل را صحیح وارد کنید.";
            case 109 :
                return "فقط تصویر jpg و png اجازه دارید.";
            case 110 :
                return "لطفا نوع نوبت خود را مشخص کنید!";
            case 111 :
                return "تاریخ انتخابی نباید گذشته باشد!";
            case 112 :
                return "ساعت ورود باید کمتر از ساعت خروج باشد!";
            case 113 :
                return "زمان هر بیمار را بر اساس دقیقه انتخاب کنید!";
            case 114 :
                return "هزینه ویزیت باید بیشتر از 1000 تومان باشد!";
            case 115 :
                return "متاسفانه عملیات پرداخت با شکست مواجه شد، لطفا دوباره تلاش کنید، در صورتی که پول از حسابتان کسر شد ظرف 72 ساعت به حساب باز میگردد!";
            case 116:
                return "توضیحات شما نباید خالی باشد!";
        }
    }
}