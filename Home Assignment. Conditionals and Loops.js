// TASK 1 = Pulse oximeter reading (Part 1)
 
var oxygenSaturation;
 
function pulseOxymeterReading(oxygenSaturation) {
   if (oxygenSaturation > 95) {
       console.log("Normal Reading.");
   }
   else if (oxygenSaturation == 95) {
       console.log("Acceptable to continue home monitoring.");
   }
   else if ((oxygenSaturation >= 92) && (oxygenSaturation < 95)) {
       console.log("Seek advice from health professionals.");
   }
   else if (oxygenSaturation < 92) {
       console.log("Seek urgent medical advice.")
   }
   else (console.log("No numerical value"))
}
pulseOxymeterReading();

// TASK 2
var pulseRateBPM ;
 
function pulseRate(pulseRateBPM) {
   if ((pulseRateBPM >= 40) && (pulseRateBPM <= 100)) {
       console.log("Normal reading.");
   }
   else if ((pulseRateBPM >= 101) && (pulseRateBPM <= 109)) {
       console.log("Acceptable to continue home monitoring");
   }
   else if ((pulseRateBPM >= 110) && (pulseRateBPM <= 130)) {
       console.log("Seek advice from health professionals");
   }
   else if (pulseRateBPM >= 131) {
       console.log("Seek urgent medival advice.");
   }
   else (console.log("N/A"))
}
pulseRate();