const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express();
let saveStatus = 1;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

const port = process.env.PORT||8000
app.listen(port, ()=>{
    console.log(`Server Running at ${port}`)
});

app.post("/captureCode", (req, res)=>{
    saveStatus = parseInt(req.body.isRun);
    res.sendStatus(200);
})

app.get("/captureCode", (req, res)=>{
    res.status(200).send({code : saveStatus});
})

app.post('/image', async (req, res)=>{
    if(saveStatus == 0) return res.sendStatus(504);

    const image = req.body.image;

    db.query(`INSERT INTO cctv_img(img) VALUES('${image}')`, (err)=>{
        if (err) return res.status(400).send(err);

        res.sendStatus(200);
    })
    
})

app.get("/images", async (req, res)=>{

    db.query("SELECT * FROM cctv_img", (err, rows)=>{
        if (err) return res.status(400).send(err);
        res.status(200).send(rows)  
    });

    
})


