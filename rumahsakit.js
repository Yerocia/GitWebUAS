function tampilRS(daerah)
{
    var rs = "";
    switch (daerah)
    {
        case "utara" : 
            {
                rs = "<ul> \
                            <li>Rumah Bersalin Budi Asih</li> \
                            <li>Kariadi Hospital Semarang</li> \
                            <li>Rumah Singgah RSUP Dr Kariadi</li> \
                        </ul";
            }break;

        case "selatan" : 
            {
                rs = "<ul> \
                            <li>Banyumanik Hospital</li> \
                            <li>Hospital K.R.M.T. Wongsonegoro Semarang</li> \
                            <li>RSU William Booth</li> \
                        </ul";
            }break;

        case "timur" : 
            {
                rs = "<ul> \
                            <li>Mother and Child Hospital Bunda</li> \
                            <li>Regional Mental Hospital Dr. Amino Gondohut</li> \
                            <li>Roemani Muhammadiyah Hospital</li> \
                        </ul";
            }break;

        case "barat" : 
            {
                rs = "<ul> \
                            <li>Mother and Child Hospital Bunda</li> \
                            <li>Siloam Hospitals Semarang</li> \
                            <li>RS. Siloam</li> \
                        </ul";
            }break;
            
        case "tengah" : 
            {
                rs = "<ul> \
                            <li>Rumah Sakit Umum Akabri Pol Semarang</li> \
                            <li>Rumah Sakit Bhayangkara Semarang</li> \
                            <li>KRMT Wongsonegoro Regional Hospital</li> \
                        </ul";
            }break;
            
        default : rs = "";
    }
    document.getElementById('namars').innerHTML =  rs;
}