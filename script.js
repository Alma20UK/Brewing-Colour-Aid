var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function () {
        output.innerHTML = this.value;
        console.log(this.value);
        if (this.value == 1) {
                document.body.style.backgroundColor = "#f8f4b4";
        } else if (this.value == 3) {
                document.body.style.backgroundColor = "#f4ce51";
        } else if (this.value == 2) {
                document.body.style.backgroundColor = "#f9e06c";
        } else if (this.value == 3) {
                document.body.style.backgroundColor = "#f4ce51";
        } else if (this.value == 4) {
                document.body.style.backgroundColor = "#f2be37";
        } else if (this.value == 5) {
                document.body.style.backgroundColor = "#edac1e";
        } else if (this.value == 6) {
                document.body.style.backgroundColor = "#e59c19";
        } else if (this.value == 7) {
                document.body.style.backgroundColor = "#df8f16";
        } else if (this.value == 8) {
                document.body.style.backgroundColor = "#d68019";
        } else if (this.value == 9) {
                document.body.style.backgroundColor = "#cf731c";
        } else if (this.value == 10) {
                document.body.style.backgroundColor = "#bd591b";
        } else if (this.value == 11) {
                document.body.style.backgroundColor = "#c3621b";
        } else if (this.value == 12) {
                document.body.style.backgroundColor = "#c86b1b";
        } else if (this.value == 13) {
                document.body.style.backgroundColor = "#b7521a";
        } else if (this.value == 14) {
                document.body.style.backgroundColor = "#ad4417";
        } else if (this.value == 15) {
                document.body.style.backgroundColor = "#ae4818";
        } else if (this.value == 16) {
                document.body.style.backgroundColor = "#ad4417";
        } else if (this.value == 17) {
                document.body.style.backgroundColor = "#a73d15";
        } else if (this.value == 18) {
                document.body.style.backgroundColor = "#a23a15";
        } else if (this.value == 19) {
                document.body.style.backgroundColor = "#9d3414";
        } else if (this.value == 20) {
                document.body.style.backgroundColor = "#983015";
        } else if (this.value == 21) {
                document.body.style.backgroundColor = "#932a14";
        } else if (this.value == 22) {
                document.body.style.backgroundColor = "#8d2615";
        } else if (this.value == 23) {
                document.body.style.backgroundColor = "#892515";
        } else if (this.value == 24) {
                document.body.style.backgroundColor = "#832212";
        } else if (this.value == 25) {
                document.body.style.backgroundColor = "#7d200f";
        } else if (this.value == 26) {
                document.body.style.backgroundColor = "#771e0e";
        } else if (this.value == 27) {
                document.body.style.backgroundColor = "#731c0b";
        } else if (this.value == 28) {
                document.body.style.backgroundColor = "#70180c";
        } else if (this.value == 29) {
                document.body.style.backgroundColor = "#6a160c";
        } else if (this.value == 30) {
                document.body.style.backgroundColor = "#67120b";
        } else if (this.value == 31) {
                document.body.style.backgroundColor = "#63100a";
        } else if (this.value == 32) {
                document.body.style.backgroundColor = "#5f0e0a";
        } else if (this.value == 33) {
                document.body.style.backgroundColor = "#5b0b0a";
        } else if (this.value == 34) {
                document.body.style.backgroundColor = "#58080b";
        } else if (this.value == 35) {
                document.body.style.backgroundColor = "#53080c";
        } else if (this.value == 36) {
                document.body.style.backgroundColor = "#4b090b";
        } else if (this.value == 37) {
                document.body.style.backgroundColor = "#450b0a";
        } else if (this.value == 38) {
                document.body.style.backgroundColor = "#400c0e";
        } else if (this.value == 39) {
                document.body.style.backgroundColor = "#3c0b0e";
        } else if (this.value == 40) {
                document.body.style.backgroundColor = "#240a0b";
        }

}