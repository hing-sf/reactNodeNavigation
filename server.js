const express = require('express');
const app = express();


app.get('/api/navlist', (req, res) => {

  const navlist =  [
                        {
                        "className": "left",
                        "color": "",
                        "href": "/products/women",
                        "label": "WOMEN"
                        },
                        {
                        "className": "left",
                        "color": "",
                        "href": "/products/designer",
                        "label": "DESIGNER"
                        },
                        {
                        "className": "left large-devices",
                        "color": "",
                        "href": "/products/maternity",
                        "label": "MATERNITY"
                        },
                        {
                        "className": "left medium-devices",
                        "color": "",
                        "href": "/products/women/shoes",
                        "label": "SHOES"
                        },
                        {
                        "className": "left medium-devices",
                        "color": "",
                        "href": "/products/women/handbags",
                        "label": "HANDBAGS"
                        },
                        {
                        "className": "left",
                        "color": "",
                        "href": "/products/girls",
                        "label": "GIRLS"
                        },
                        {
                        "className": "left",
                        "color": "",
                        "href": "/products/boys",
                        "label": "BOYS"
                        },
                        {
                        "className": "left",
                        "color": "",
                        "href": "/products/women/basement",
                        "label": "BASEMENT"
                        },
                        {
                        "className": "right largest-devices",
                        "color": "",
                        "href": "https://blog.thredup.com",
                        "label": "BLOG"
                        },
                        {
                        "className": "right largest-devices bam",
                        "color": "",
                        "href": "/badassmoms/karina",
                        "label": "BADASSMOMS"
                        },
                        {
                        "className": "right sell",
                        "color": "green",
                        "href": "/p/cleanout",
                        "label": "SELL"
                        }
                    ];

    res.json( navlist )

});

const port = (5000)
app.listen( port, () => { console.log(` Server port: ${port}`)});