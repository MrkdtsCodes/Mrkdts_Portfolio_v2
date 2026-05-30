
const _certValues = [

    {   
        id: 1,
        imagelink: "./assets/Certifications_folder/spes_cert.jpg",
        certName: "Acceptance Certification",
        certplace: "@Temporary City Hall, Pasig City"
    },

    {
        id: 2,
        imagelink: "./assets/Certifications_folder/lhoopa.jpeg",
        certName:  "OJT Ceritifiacte of Completion",
        certplace:  "@Lhoopa, Mandaluyong"
    }   

];

_showCertificates(_certValues);

function _showCertificates(array){
    
    const carousel = document.querySelector('carousel');
    const certvalues = array;

    let carousels = '';
    certvalues.forEach((value) => {
         carousels += `
         <div class="btnn">
                <div class="imageCard" data-imageId="${value.id}">
                    <img
                        src="${value.imagelink}"
                        alt="picture_of_Dwight_RAMOS"
                    />
                </div>
            <div class="nameCard">
                <span class="certificateName">${value.certName}</span>
                <span class="Certificate_place">${value.certplace}</span>
            </div>
            
         <div>
         `


        
    });

    document.getElementById('group').innerHTML = carousels;

    const imageCard = document.querySelectorAll('.imageCard');
    

    imageCard.forEach(function(value){
    const button = value;
        button.addEventListener('click', function(event){
            
            const id = this.getAttribute('data-imageId');
            
            const modelcontainers = document.getElementById('modelcontainers');
            const wholepage = document.querySelector('.mainContainer');
            let arrayoflist = _certValues;

            // console.log(arrayoflist);
            
            modelcontainers.style.display = "flex";
            // console.log("this is the id we get " + id);

            arrayoflist.forEach((value)=>{
                console.log(value);
                if(id == value.id){
                    imgsrc = "";

            imgsrc += `<img id="imagesrc" src="${value.imagelink}">`

            document.getElementById('imageContainerModal').innerHTML = imgsrc;
                    
                }

            });

            
        });

    });

    
};
const closeBtnn = document.querySelector('.closeBtn');

    closeBtnn.addEventListener('click', function(){
        const modelcontainers = document.getElementById('modelcontainers');
        modelcontainers.style.display = "none";
    });




