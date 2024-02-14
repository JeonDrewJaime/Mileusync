//Grid
import { ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import theme from '../Theme.js'
import '../App.css';
import Button from '@mui/material/Button';


function HomePage({isDark}) {
  return (
    <div className="App"  >
      
         <ThemeProvider theme={theme} >
         <Grid container  sx={{ pt: 9.5, pl:3, backgroundColor: isDark? "black" : "#FFFFFF",transition: '0.3s',flexDirection: { xs: 'column', md: 'row' }}}>
      <Grid item xs={9.2} style={{ textAlign: 'left' }} sx = {{mt: 5}}>
    
        <Typography sx={{ color:  isDark? '#FDFEFD' : "black", fontSize: 80, fontFamily: "Inter", fontWeight: "bold", mt: 15, mr: 60 }}>
        Ready for a <Typography component="span" sx = {{color: "#82B054", fontSize: 80, fontFamily: "Inter", fontWeight: "bold", display: 'inline'}}>green </Typography>campus makeover?
        </Typography>
        <Typography sx={{ color: isDark? '#FDFEFD' : "black", fontSize: 23, fontFamily: "Inter", fontWeight: "Regular", mt: 5 ,mr:20 }}>
        Earn points for your class, share eco-friendly ideas in our Feed, and take part in exciting events. Immerse yourself in innovation, minimise your carbon footprint, and become a part of an active community shaping the future of STI Caloocan. Sustainability has never been more rewarding! 
        </Typography>  
        <Grid container sx = {{alignSelf: "center", pt : 10, pl: 1}} >
        <Grid item xs={2} >
  
        <Button variant="contained" sx = {{backgroundColor: isDark  ? "#7DAB4F" : "black", p: 2,pl: 5, pr: 5, borderColor: isDark ?"#7DAB4F" : "black", borderRadius:3, '&:hover': { color: '#161F01', backgroundColor: "#7DAB4F" ,transition: '0.3s'}}}>
        <Typography sx = {{color: "white", fontSize: 20, fontFamily: "Inter", fontWeight: "bold"}}>Download</Typography>
        </Button>
   
        </Grid>

        {/* Second Grid */}
        <Grid item xs={2} >
      
        <Button variant="outlined" sx = {{ p: 1.9, pl: 5, pr: 5, borderRadius:3, borderColor: isDark ?"#7DAB4F" : "black", borderWidth: 2, '&:hover': { color: '#161F01',borderRadius:3, borderColor: "black", borderWidth: 2 ,transition: '0.3s'}}}>
        <Typography sx = {{color: isDark? '#FDFEFD' : "black", fontSize: 20, fontFamily: "Inter", fontWeight: "bold"}}>learn more</Typography>
        </Button>

     
        </Grid>

        {/* Third Grid */}
        <Grid item xs={0.6} sx = {{pl: 1,}}  >
        <img style = {{objectFit: "cover", height: 60, width: 60}}src='..\src\assets\foot.png' alt="An external image"/>
        </Grid>
        <Grid item xs={6}  >
        <Typography sx={{ color: isDark? '#FDFEFD' : "black", fontSize: 23, fontFamily: "Inter", fontWeight: "Bold",}} component="span">
          1,000,000+ 
          <Typography sx={{  color: isDark? '#FDFEFD' : "black", fontSize: 23, fontFamily: "Inter", fontWeight: "Regular" ,mr:20, alignSelf: "top"}} >
          Downloads
        </Typography>
        </Typography>

        </Grid>
      </Grid>   
      </Grid>
   
      <Grid item xs={0.5} sx = {{mt: 5}}>
        <img style = {{objectFit: "cover", height: 800}}src='..\src\assets\Photo.png' alt="An external image"/>
      </Grid>
    </Grid>
    <Typography sx={{  color: isDark? '#FDFEFD' : "black", fontSize: 80, fontFamily: "Inter", fontWeight: "bold", pt: 2, pl:3, backgroundColor: isDark? "black" : "#FFFFFF",transition: '0.3s'}}>
         How it works?
    </Typography>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , paddingBottom: 20}}>
      <Grid container sx = {{alignItems: "center", pt : 10, pl: 1.5, pb :15 ,backgroundColor: isDark? "black" : "#FFFFFF",transition: '0.3s'}} >
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }} >
        <img style = {{objectFit: "cover", height: 600}}src='..\src\assets\CARD1.png' alt="An external image"/>
        </Grid>

        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <img style = {{objectFit: "cover", height: 600}}src='..\src\assets\CARD2.png' alt="An external image"/>
        </Grid>
        <Grid item xs={4} style={{ display: 'flex', justifyContent: 'center' }} >
        <img style = {{objectFit: "cover", height: 600}}src='..\src\assets\CARD2.png' alt="An external image"/>
        </Grid>
      </Grid>
  </div>
  <hr style={{ width: '100%', borderBottom: '1px solid #CFCFCF'}} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Grid container spacing={2} sx= {{pt: 2, pb:5, backgroundColor: isDark? "black" : "#FFFFFF",transition: '0.3s'}}>
        {/* Single Grid Item */}
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ color: isDark? '#FDFEFD' : "black", fontSize: 20, fontFamily: "Inter", fontWeight: "Regular", ml:1 }}>
         <p>Links | Contact | Privacy Policy</p> Copyright © 2023 • VERTECH
    </Typography>
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
    </div>
  )
}

export default HomePage
