// Menggunakan Highcharts untuk membuat chart baru
Highcharts.chart('container-chart', {
    // Opsi konfigurasi untuk chart

    chart: {
        type: 'pie' // Menentukan tipe chart adalah 'pie'
    },

    title: {
        text: 'Persentase Pengguna Browser' // Judul utama chart
    },

    tooltip: {
        // Teks yang muncul saat mouse hover di atas sebuah irisan
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    plotOptions: {
        pie: {
            allowPointSelect: true, // Izinkan pengguna mengklik untuk memilih irisan
            cursor: 'pointer',       // Ubah kursor menjadi tangan saat hover
            dataLabels: {
                enabled: true,
                // Format label yang ditampilkan di samping setiap irisan
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },

    // Ini adalah data yang akan ditampilkan
    series: [{
        name: 'Pangsa Pasar',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 74.2,
            sliced: true,   // Membuat irisan ini sedikit keluar
            selected: true  // Membuat irisan ini terpilih secara default
        }, {
            name: 'Firefox',
            y: 12.5
        }, {
            name: 'Edge',
            y: 8.3
        }, {
            name: 'Safari',
            y: 3.1
        }, {
            name: 'Lainnya',
            y: 1.9
        }]
    }]
});
