const express = require('express');
const app = express();


app.get('/api/navlist', (req, res) => {

  const navlist =  [
                        {
                        "className": "left",
                        "href": "/products/women",
                        "label": "WOMEN"
                        },
                        {
                        "className": "left",
                        "href": "/products/designer",
                        "label": "DESIGNER"
                        },
                        {
                        "className": "left large-devices",
                        "href": "/products/maternity",
                        "label": "MATERNITY"
                        },
                        {
                        "className": "left medium-devices",
                        "href": "/products/women/shoes",
                        "label": "SHOES"
                        },
                        {
                        "className": "left medium-devices",
                        "href": "/products/women/handbags",
                        "label": "HANDBAGS"
                        },
                        {
                        "className": "left",
                        "href": "/products/girls",
                        "label": "GIRLS"
                        },
                        {
                        "className": "left",
                        "href": "/products/boys",
                        "label": "BOYS"
                        },
                        {
                        "className": "left",
                        "href": "/products/women/basement",
                        "label": "BASEMENT"
                        },
                        {
                        "className": "right largest-devices",
                        "href": "https://blog.thredup.com",
                        "label": "BLOG"
                        },
                        {
                        "className": "right largest-devices bam",
                        "href": "/badassmoms/karina",
                        "label": "BADASSMOMS"
                        },
                        {
                        "className": "right sell green",
                        "href": "/p/cleanout",
                        "label": "SELL"
                        }
                    ];

    res.json( navlist )

});

const port = (5000)
app.listen( port, () => { console.log(` Server port: ${port}`)});