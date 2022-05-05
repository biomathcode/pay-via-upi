
//create a overlay component with lower z-index when clicked we will remove the dialog from the window

// overlay element
// add qrcode 
// open with UPI apps button and we are done


window.addEventListener(
    "DOMContentLoaded",
    function () {
      var ol = document.querySelector('script[data-name="pay-via-upi"]');
  
      var amountList = ol.dataset['amount_list']
  
      var upi_id = ol.dataset['pa']
  
      let currency = ol.dataset['cu']
      let pn = ol.dataset['pn']
       
      var amountvalues = amountList.split(",")
  
    
      var e = document.createElement("button");
  
      e.type = "button";
      e.innerText = ol.dataset.label;
      (e.style.backgroundColor = "#1F1F1F"),
        (e.style.color = "#e5e5e5"),
        (e.style.fontWeight = "500"),
        e.style.letterSpacing = '1.5'
        e.style.fontSize = '14px';
        (e.style.display = "flex");
      e.style.position = "fixed";
      e.style.right = "35px";
      e.style.bottom = "35px";
      e.style.borderRadius = '5px';
      e.style.outline = 'none'
      e.style.border = 'none'
      e.style.padding = "10px 20px 10px 20px";
      e.style.transition = "all 0.2s ease-in";
      e.style.cursor = "pointer";
      e.style.zIndex = 10000
      e.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
  
  
      e.onmouseover = function () {
        e.style.backgroundColor = '#353434'
        e.style.color = 'C5C5C5'
        e.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)'
      };
      e.onmouseleave = function () {
        e.style.backgroundColor = '#1F1F1F'
        e.style.color = '#e5e5e5'
  
      };
  
      let overlay = document.createElement('div')
  
      overlay.style.position = 'fixed';
  
      overlay.style.top = '0';
      overlay.style.bottom = '0';
      overlay.style.right = '0';
      overlay.style.left  = '0';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
      overlay.style.pointerEvents = 'none'
      overlay.style.opacity = '0'
      overlay.style.display = 'block';
      overlay.style.overflow = 'hidden';


  
  
      overlay.addEventListener('click', (e) => {
        overlay.style.scale = '0'
        overlay.style.opacity = '1'
        overlay.remove()
        var dialogbox = document.getElementById('dialogbox-payviaupi')
        dialogbox.remove()
        
      })
  
  
  
  
  
      e.onclick = function () {
          var dialogbox = document.getElementById('dialogbox-payviaupi');
  
          let qrcodelink = `upi://pay?cu=${String(currency)}&pa=${upi_id}&am=${String(amountvalues[0])}&pn=${encodeURIComponent(pn)}`;
  
          let upiLabel = document.createElement('div');

          let closeIcon = document.createElement('div');

          closeIcon.style.width = '50px';

          closeIcon.style.backgroundColor = '#fff';

          closeIcon.style.outline = 'none';
          
          closeIcon.style.border = 'none';

          closeIcon.style.cursor = 'pointer';

          closeIcon.innerHTML = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>';

          closeIcon.style.position = 'absolute';
          
          closeIcon.style.right = '1px';

          closeIcon.style.padding = '5px';

          closeIcon.style.borderRadius = '10px';

          closeIcon.style.top = '2px';

          closeIcon.addEventListener('mouseover', () => {
              closeIcon.style.background = '#eee';
          })

          closeIcon.addEventListener('mouseleave', () => {
              closeIcon.style.background = '#fff';
          })

          closeIcon.addEventListener('click', () => {
              dialogbox.remove()
              overlay.remove()
          })


          upiLabel.style.margin = '0';
  
          upiLabel.innerText = upi_id;
  
          upiLabel.style.color = '#4f4f4f';
  
          upiLabel.style.fontSize = '14px';
  
  
          let link = document.createElement('a')

          link.addEventListener('mouseover', () => {
              link.style.background = '#eee';
          })
  
          link.addEventListener('mouseleave', () =>{
            link.style.background = '#fff'
          })
          link.href = qrcodelink
          link.innerHTML = '<div style="display:flex;align-items:center; align-content:center; padding:10px;"> <div>Open with  </div><div style="margin:0px 10px; width: 30px"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill:#5f259f;}.cls-2{fill:#fff;}</style></defs><title>phonepe</title><path class="cls-1" d="M75.56,1.66a61.42,61.42,0,1,0,45.66,73.9A61.42,61.42,0,0,0,75.56,1.66Z"/><path class="cls-2" d="M89.32,45.41A4.54,4.54,0,0,0,84.86,41H76.62L57.75,19.33a7,7,0,0,0-7.21-2.06L44,19.33a1.52,1.52,0,0,0-.69,2.4L63.92,41.29H32.7A1.63,1.63,0,0,0,31,43v3.43a4.54,4.54,0,0,0,4.46,4.46h4.81V67.37c0,12.35,6.52,19.56,17.5,19.56a23.66,23.66,0,0,0,9.61-1.72v11a5.42,5.42,0,0,0,5.49,5.49h4.8a2.22,2.22,0,0,0,2.06-2.06V50.56H87.6a1.63,1.63,0,0,0,1.72-1.72V45.41Zm-22,29.51a16.38,16.38,0,0,1-6.87,1.37c-5.49,0-8.23-2.74-8.23-8.92V50.9h15.1v24Z"/></svg></div><div style="width:30px; margin:0px 10px"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123.84 104.9"><defs><path id="prefix__a" d="M65.7 63.18l30.4-52.66 16.56 9.56c10.69 6.17 14.36 19.85 8.18 30.54l-17.12 29.65c-3.86 6.68-12.4 8.97-19.09 5.12l-15.37-8.87C64.6 73.81 63 67.84 65.7 63.18z"/></defs><defs><path id="prefix__c" d="M0 .02h123.84V104.9H0z"/></defs><clipPath id="prefix__b"><use xlink:href="#prefix__a" overflow="visible"/></clipPath><clipPath id="prefix__d" clip-path="url(#prefix__b)"><use xlink:href="#prefix__c" overflow="visible"/></clipPath><g clip-path="url(#prefix__d)"><defs><path id="prefix__e" d="M64.32 10.34h59.52v77.04H64.32z"/></defs><clipPath id="prefix__f"><use xlink:href="#prefix__e" overflow="visible"/></clipPath><g clip-path="url(#prefix__f)"><image width="132" height="164" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAANVAAAEYAAABk//2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAKUAhQMBIgACEQEDEQH/ xACwAAEBAQEBAQEAAAAAAAAAAAAAAgEFBAYHAQEAAgMBAAAAAAAAAAAAAAAAAQYCBAUDEAACAAMG BgMBAAAAAAAAAAAAASADBTACEjM1BhAxMgQ0FSITIxERAAEBBQgCAQIHAAAAAAAAAAIBABAwsQMR oXKSM3MENNLTkTITITFxEiJSFBIAAQECDgEDBQAAAAAAAAAAAQAQAiAwETFxkXKSogMzQ6NEMiFB EoFCEyMU/9oADAMBAAIRAxEAAADrcn2cTT7/AEa51Ye3Q3wUe54iPa8RPteIj2vEPbXgo/RBv1v4 vidviaVi2orD3uouG7moAAAVNI/RB0ax8XxO3xNKxKncPe6ii9nYjQAAKmkfog6NY+L4nb4mlYgw 96qKLqKiKAAAqaR+iDo1j4vidviaViDD32oouoorc2IAAVNI/RB0ax8XxO3xNKxBh7twXUUXs1Ea ABU0fog6NX+L4nb4mlYgw9wNuKL2aiKZoAqaP0QdGr/F8Tt8TSsQYe4Cp0uoovZqIAVNH6IOjV/i +J2+JpWIMPcBuCrii9mojQKmj9EHRq/xfE7fE0rEGHuABtRRdRUK3NQqaP0QdGr/ACnJNbrhj6ga BoVoVoKEfbjb4n//2gAIAQIAAQUAmXr2PFeMV4xXjFeMV4xXjFe4TOuwmddhM67CZ12EzrsJnXYT OuwmddhM67C//MXxPifE+J8T4nx4f//aAAgBAwABBQDtZUtyPplH0yj6ZR9Mo+mUfTKHJlfw7Tx4 nyO08eJ8jtPHifI7Tx4nyO08eJ8jtPHifI7Tx4nyO08eJ8jtPHifIkY/q/Q/Q/Q/Q/Q/Qf2fw//a AAgBAQABBQDctT7/ALWoquVYVcqwq3VRVqqHuaoe5qh7mqHuaoe5qh7mqHuaoe5qh7mqHuaoS6xU 3fN26qIQhWUvMN26qIQhWUvMN26qIQhWUvMN26rwQhCsZeYbt1XghCFYy8w3bqvBCEIVhLzDduq8 UIQrCXmG7dV4oQhWEvMN26rAhCFHLzDduqwIQhRy8w3bqsCEIUcvMN26rChCFFLzDduqwoQhRS8w 3bqsKEIQoZeYbt1WJCEKGXmG7dViQhCFBLzDduqxoQhQS8w3bqsaEIUEvMN26rGhCELjLzDcqprq OGhmGhmGhmGhmGhmGhmGhmGhiu0QV2iCu0Uw0Yw0Yw0Yl3aPjP/aAAgBAgIGPwB71M6nNanNa8jW vI1ryNa8jWpzWx6mJepiXqYl6mJepiXqYl6mJepiXqYk6c/vKtvEtvEtvEtvEtvEtvEtvEz/2gAI AQMCBj8AyyXHCS6J3QtNy6FpuXQtNy6FpuXQtNy6FpuXQj+ty6GZdgQyzLsCGWZdgQyzLsCGWZdg QyzLsCGWZdgQyzLsCGWZdgQyxyT+mT4/b+P4/SX1Xb412+NdvjXb412+NdvjXb42f//aAAgBAQEG PwBKXHrlTD7Yr+0fytVSbtH8o3aP5Ru0fyjdk7m7J3N2Tubsnc3ZO5uydzdk7m7J3N2Tubsnc3ZO 5hReSdiqlrk2hmUcMSTcm0MyjhiSbk2hmUcMSTcm0MyjhiSbk2hmUcMSTcm0MyjhiSbk2hmUcMST cm0MyjhiSbk2hmUcMSTcm0MyjhiSbk2hmUcMSTcm0MyjhiSbk2hmUcMSTcm0MyjhiSbk2hmUcMST cm0MyjhiSbk2hmUcMSTcm0MyjhiSbk2hmUcP1Sbk/wBR1xqfbH8KQgQ2Wl/YkbU5WSn7G1OVkp+x tTlZKfsbU5WSn7G1OVkp+xtTlZKfsbU5WSn7G1OVkp+xtTlZKfsbU5WSn5tqcnJT82+vk5Kfm318 nJT82+vk5Kfmw2HybbUs/hT83f/Z" transform="matrix(.48 0 0 -.48 63.303 88.18)" overflow="visible"/></g></g><path d="M62.46 26.62l-37.82 65.5 16.56 9.56c10.69 6.17 24.37 2.51 30.54-8.18l24.53-42.49c3.86-6.68 1.57-15.23-5.12-19.09l-15.37-8.87c-4.66-2.7-10.62-1.1-13.32 3.57z" fill="#fdbd00"/><path d="M96.1 10.51L84.38 3.75C71.02-3.97 53.93.61 46.21 13.98L24.47 51.62c-3.86 6.68-1.57 15.23 5.12 19.09l11.72 6.76c6.68 3.86 15.23 1.57 19.09-5.12L86.35 27.4c5.39-9.34 17.33-12.53 26.66-7.14L96.1 10.51zm0 0z" fill="#2da94f"/><defs><path id="prefix__g" d="M49.58 25.01l-12.93-7.45c-5.76-3.32-13.13-1.35-16.46 4.4L4.67 48.77c-7.64 13.2-3.11 30.08 10.12 37.7l9.85 5.67 11.94 6.88 5.18 2.98c-9.2-6.16-12.12-18.5-6.5-28.21l4.02-6.94 14.71-25.42c3.33-5.74 1.36-13.1-4.41-16.42z"/></defs><defs><path id="prefix__i" d="M0 .02h123.84V104.9H0z"/></defs><clipPath id="prefix__h"><use xlink:href="#prefix__g" overflow="visible"/></clipPath><clipPath id="prefix__j" clip-path="url(#prefix__h)"><use xlink:href="#prefix__i" overflow="visible"/></clipPath><g clip-path="url(#prefix__j)"><defs><path id="prefix__k" d="M.96 15.86h54.72v86.16H.96z"/></defs><clipPath id="prefix__l"><use xlink:href="#prefix__k" overflow="visible"/></clipPath><g clip-path="url(#prefix__l)"><image width="120" height="182" xlink:href="data:image/jpeg;base64,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 hZtD6Qoy/9k=" transform="matrix(.48 0 0 -.48 .307 102.542)" overflow="visible"/></g></g></svg></div> <div style="width: 50px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 38.52"><path d="M122.47 11.36c-1.12-3.19-4.16-5.48-7.72-5.48h-.08c-2.32 0-4.41.97-5.9 2.52a8.16 8.16 0 00-5.9-2.52h-.07c-2.04 0-3.91.75-5.34 1.98v-.62c-.05-.63-.56-1.12-1.2-1.12h-5.48c-.67 0-1.21.54-1.21 1.21v29.74c0 .67.54 1.21 1.21 1.21h5.48a1.2 1.2 0 001.19-1.04V15.89c0-.08 0-.14.01-.21.09-.95.79-1.74 1.89-1.83h1.01c.46.04.85.2 1.15.45.48.38.74.96.74 1.6l.02 21.24c0 .67.54 1.22 1.21 1.22h5.48a1.2 1.2 0 001.2-1.15V15.88c0-.7.32-1.34.89-1.71.28-.18.62-.3 1.01-.34h1.01c1.19.1 1.9 1 1.9 2.05l.02 21.22c0 .67.54 1.21 1.21 1.21h5.48c.64 0 1.17-.5 1.21-1.13V13.91c-.03-1.31-.2-1.92-.42-2.55zM85.39 6.2h-3.13V1.12 1.1A1.105 1.105 0 0080.94.02c-3.47.95-2.78 5.76-9.12 6.17h-.61c-.09 0-.18.01-.27.03h-.01.01c-.53.13-.94.61-.94 1.19v5.48c0 .67.54 1.21 1.21 1.21h3.3l-.01 23.22c0 .66.54 1.2 1.2 1.2h5.42c.66 0 1.2-.54 1.2-1.2V14.1h3.07c.66 0 1.21-.55 1.21-1.21V7.41c0-.67-.54-1.21-1.21-1.21z" fill="#00baf2"/><path d="M65.69 6.2h-5.48c-.66 0-1.21.54-1.21 1.21v11.33c-.01.7-.58 1.26-1.28 1.26h-2.29c-.71 0-1.29-.57-1.29-1.28l-.02-11.31c0-.67-.54-1.21-1.21-1.21h-5.48c-.67 0-1.21.54-1.21 1.21v12.41c0 4.71 3.36 8.08 8.08 8.08 0 0 3.54 0 3.65.02.64.07 1.13.61 1.13 1.27 0 .65-.48 1.19-1.12 1.27-.03 0-.06.01-.09.02l-8.01.03c-.67 0-1.21.54-1.21 1.21v5.47c0 .67.54 1.21 1.21 1.21h8.95c4.72 0 8.08-3.36 8.08-8.07V7.41c.01-.67-.53-1.21-1.2-1.21zm-31.16.03h-7.6c-.67 0-1.22.51-1.22 1.13v5.14c0 .66.58 1.21 1.29 1.21h7.24c.57.09 1.02.51 1.09 1.16v.71c-.06.62-.51 1.07-1.06 1.12h-3.58c-4.77 0-8.16 3.17-8.16 7.61v6.37c0 4.42 2.92 7.56 7.65 7.56h9.93c1.78 0 3.23-1.35 3.23-3.01V14.45c0-5.04-2.6-8.22-8.81-8.22zm.87 22.86v.86c0 .07-.01.14-.02.2s-.03.12-.05.18c-.17.48-.65.83-1.22.83h-2.28c-.71 0-1.29-.54-1.29-1.21v-1.03V25.26c0-.66.58-1.2 1.29-1.2h2.28c.71 0 1.29.54 1.29 1.21v3.82zM13.16 6.19H1.19C.53 6.19 0 6.73 0 7.38V37.14c0 .66.49 1.2 1.11 1.21h5.58c.67 0 1.21-.54 1.21-1.21l.02-8.32h5.24c4.38 0 7.44-3.04 7.44-7.45v-7.72c0-4.4-3.06-7.46-7.44-7.46zm-.48 10.04v3.38c0 .71-.57 1.29-1.28 1.29H7.93v-6.77h3.47c.71 0 1.28.57 1.28 1.28v.82z" fill="#20336b"/></svg></div></div>'
  
          let dataqrcode = QRCode.generatePNG(qrcodelink)
  
          let qrcodeImage = document.createElement('img')

          let qrcodeContainer = document.createElement('div');


  
          
          let name  = ol.dataset['pn']
  
          qrcodeImage.src = dataqrcode
  
          qrcodeImage.alt = upi_id
  
          qrcodeImage.style.margin = '0'
  
          qrcodeImage.style.padding = '0'
  
          qrcodeImage.style.width = '200px'
          qrcodeImage.style.marginLeft = 'auto'
          qrcodeImage.style.marginRight = 'auto'
  
          if(!dialogbox)  { 
          dialogbox = document.createElement("dialog");
          dialogbox.id = "dialogbox-payviaupi";
  
          dialogbox.style.borderRadius = '10px'
          dialogbox.style.border = '2px solid #eee'
          dialogbox.style.transition = "all 0.2s ease-in";
          dialogbox.style.display = 'flex'
          dialogbox.style.flexDirection = 'column'
          dialogbox.style.textAlign = 'center';
          dialogbox.style.fontFamily = 'sans-serif';
          dialogbox.style.gap = '20px'
          dialogbox.style.zIndex = "1000000"
          dialogbox.style.position = 'fixed';
          dialogbox.style.top = '10%'
         
  
          var input = document.createElement('input')
          input.id = "amount-value"
  
          input.value = amountvalues[0]
          input.style.border = '2px solid #eee'
          input.style.boxSizing = 'border-box'
          input.style.width = '224px';
          input.style.height = '35px';
          input.style.borderRadius = '10px'
          input.style.padding = '1px 5px 1px 5px';
          input.type = 'number'
          input.style.fontSize = '16px';
  
         
  
          input.addEventListener('change', (e) => {
             
              let qrcodelink = `upi://pay?cu=${String(currency)}&pa=${upi_id}&am=${String(e.target.value)}&pn=${encodeURIComponent(pn)}`
              link.href = qrcodelink
  
              let dataqrcode = QRCode.generatePNG(qrcodelink)
          qrcodeImage.src = dataqrcode
  
          })
  
          var list = document.createElement('div')
  
          list.style.listStyle = 'none'
          list.style.display = "flex";
          list.style.flexDirection = 'row';
          list.style.justifyContent = 'center';
          list.style.gap = '10px';
          list.style.marginTop = '0'
  
      
          for(let i in amountvalues) {
              let el  =document.createElement('div')
              el.style.fontFamily = 'sans-serif';
              el.label = amountvalues[i]
              el.innerText = ` \u20B9${amountvalues[i]} `
              el.value = amountvalues[i]
              el.style.padding = '2px 10px 2px 10px';
              el.style.border = '2px solid #eee';
              el.tabIndex = '0';
              el.style.color = '#3A3A3A';
              el.style.cursor = 'pointer';
              el.style.fontSize ='14px';
              el.style.borderRadius = '9999px'
              el.style.transition = 'all 0.3s ease-in'
              el.addEventListener('mouseover', (e) => {
                  el.style.border = '2px solid #8fce00'
                
              });
              el.addEventListener('mouseleave', (e) => {
              el.style.border = '2px solid #eee'
                el.style.backgroundColor = 'white'
                el.style.color = '#3A3A3A'
              })
              el.addEventListener('click', (e) => {
                  input.value = Number(e.target.value) 
                  let qrcodelink = `upi://pay?cu=${String(currency)}&pa=${upi_id}&am=${String(e.target.value)}&pn=${encodeURIComponent(pn)}`
              link.href = qrcodelink
  
  
              let dataqrcode = QRCode.generatePNG(qrcodelink)
          qrcodeImage.src = dataqrcode
  
  
  
              })
              list.appendChild(el)
          }
  
        
          overlay.style.opacity = "1";
          overlay.style.pointerEvents = 'all';
          
  
  
     
  
  
          dialogbox.setAttribute("open", "open");
          
          
          
  
          let nameText = document.createElement('h3')
  
          let divider = document.createElement('hr')
  
          let inputContainer = document.createElement('div')
  
          let amountContainer = document.createElement('div')
  
          let rupeeLabel = document.createElement('span')
  
          let amountLabel = document.createElement('label')
  
          amountLabel.style.fontSize = '12px';
          amountLabel.innerText = 'Enter the Amount'
          amountLabel.style.fontWeight = '500';
          amountLabel.style.textAlign = 'left';
          amountLabel.style.marginLeft = '40px';
          amountLabel.style.color = "#6B6B6B"
          amountLabel.style.marginTop = '20px';
  
          amountContainer.style.display = 'flex';
  
  
          amountContainer.style.flexDirection = 'column';
          amountContainer.style.gap = '10px';
          
  
  
          
  
          rupeeLabel.style.fontSize = '20px'
  
          rupeeLabel.innerText = '\u20B9'
          rupeeLabel.style.alignItems = 'center'
          rupeeLabel.style.marginRight = '10px';
  
          
  
          inputContainer.style.display = 'flex'
          inputContainer.style.alignItems = 'center'
          inputContainer.style.gap = '0px';
  
          inputContainer.style.alignContent = 'center'
          inputContainer.style.justifyContent = 'center'
          
  
          inputContainer.appendChild(rupeeLabel)
          inputContainer.appendChild(input)
  
          amountContainer.append(amountLabel)
  
          amountContainer.append(inputContainer)
  
  
      
          divider.style.width = '100%';
          divider.style.marginTop = '0'
          divider.style.borderTop = '2px solid #eee';
          divider.style.borderRight = '0';
          divider.style.borderLeft = '0';
          divider.style.borderBottom = '0';
  
  
  
          nameText.innerHTML = `<div style="color: #6B6B6B; letter-spacing: 0;  font-size:  12px; margin-bottom: 4px; font-weight: 100 ">UPI payment to <br/></div>
          <div style="text-decoration: underline; text-decoration-color: #8fce00; text-underline-offset: 5px">${name}</div>
          `
          nameText.style.color = '#3A3A3A';
          nameText.style.fontWeight = '500';
          nameText.style.fontSize = '16px';
          nameText.style.letterSpacing = '.1rem';
          nameText.style.margin = '0';
          nameText.style.padding = '0';

  
      
  
          dialogbox.appendChild(closeIcon);
  
          dialogbox.appendChild(nameText)
  
  
          dialogbox.appendChild(amountContainer)
  
  
          dialogbox.appendChild(list)

          qrcodeContainer.appendChild(qrcodeImage)
          qrcodeContainer.appendChild(upiLabel)
  

          dialogbox.appendChild(qrcodeContainer)
     

  
          dialogbox.appendChild(link)
  
  
  
          document.body.appendChild(overlay);
          document.body.appendChild(dialogbox);
  
  
          
  
          exits = true;
          } else {
  
            overlay.style.opacity = '0'
            overlay.style.pointerEvents = 'none'
  
            dialogbox.style.scale = '0'
  
              
              dialogbox.remove()
          }
       
      };
  
      document.body.appendChild(e);
    },
    false
  );
  
  
  
  
  
  
  

  (function(root, name, definition) {
      if (typeof define === 'function' && define.amd) {
          define([], definition);
      } else if (typeof module === 'object' && module.exports) {
          module.exports = definition();
      } else {
          root[name] = definition();
      }
  })(this, 'QRCode', function() {

  var VERSIONS = [
      null,
      [[10, 7,17,13], [ 1, 1, 1, 1], []],
      [[16,10,28,22], [ 1, 1, 1, 1], [4,16]],
      [[26,15,22,18], [ 1, 1, 2, 2], [4,20]],
      [[18,20,16,26], [ 2, 1, 4, 2], [4,24]],
      [[24,26,22,18], [ 2, 1, 4, 4], [4,28]],
      [[16,18,28,24], [ 4, 2, 4, 4], [4,32]],
      [[18,20,26,18], [ 4, 2, 5, 6], [4,20,36]],
      [[22,24,26,22], [ 4, 2, 6, 6], [4,22,40]],
      [[22,30,24,20], [ 5, 2, 8, 8], [4,24,44]],
      [[26,18,28,24], [ 5, 4, 8, 8], [4,26,48]],
      [[30,20,24,28], [ 5, 4,11, 8], [4,28,52]],
      [[22,24,28,26], [ 8, 4,11,10], [4,30,56]],
      [[22,26,22,24], [ 9, 4,16,12], [4,32,60]],
      [[24,30,24,20], [ 9, 4,16,16], [4,24,44,64]],
      [[24,22,24,30], [10, 6,18,12], [4,24,46,68]],
      [[28,24,30,24], [10, 6,16,17], [4,24,48,72]],
      [[28,28,28,28], [11, 6,19,16], [4,28,52,76]],
      [[26,30,28,28], [13, 6,21,18], [4,28,54,80]],
      [[26,28,26,26], [14, 7,25,21], [4,28,56,84]],
      [[26,28,28,30], [16, 8,25,20], [4,32,60,88]],
      [[26,28,30,28], [17, 8,25,23], [4,26,48,70,92]],
      [[28,28,24,30], [17, 9,34,23], [4,24,48,72,96]],
      [[28,30,30,30], [18, 9,30,25], [4,28,52,76,100]],
      [[28,30,30,30], [20,10,32,27], [4,26,52,78,104]],
      [[28,26,30,30], [21,12,35,29], [4,30,56,82,108]],
      [[28,28,30,28], [23,12,37,34], [4,28,56,84,112]],
      [[28,30,30,30], [25,12,40,34], [4,32,60,88,116]],
      [[28,30,30,30], [26,13,42,35], [4,24,48,72,96,120]],
      [[28,30,30,30], [28,14,45,38], [4,28,52,76,100,124]],
      [[28,30,30,30], [29,15,48,40], [4,24,50,76,102,128]],
      [[28,30,30,30], [31,16,51,43], [4,28,54,80,106,132]],
      [[28,30,30,30], [33,17,54,45], [4,32,58,84,110,136]],
      [[28,30,30,30], [35,18,57,48], [4,28,56,84,112,140]],
      [[28,30,30,30], [37,19,60,51], [4,32,60,88,116,144]],
      [[28,30,30,30], [38,19,63,53], [4,28,52,76,100,124,148]],
      [[28,30,30,30], [40,20,66,56], [4,22,48,74,100,126,152]],
      [[28,30,30,30], [43,21,70,59], [4,26,52,78,104,130,156]],
      [[28,30,30,30], [45,22,74,62], [4,30,56,82,108,134,160]],
      [[28,30,30,30], [47,24,77,65], [4,24,52,80,108,136,164]],
      [[28,30,30,30], [49,25,81,68], [4,28,56,84,112,140,168]]];
  

  var MODE_TERMINATOR = 0;
  var MODE_NUMERIC = 1, MODE_ALPHANUMERIC = 2, MODE_OCTET = 4, MODE_KANJI = 8;
  

  var NUMERIC_REGEXP = /^\d*$/;
  var ALPHANUMERIC_REGEXP = /^[A-Za-z0-9 $%*+\-./:]*$/;
  var ALPHANUMERIC_OUT_REGEXP = /^[A-Z0-9 $%*+\-./:]*$/;

  var ECCLEVEL_L = 1, ECCLEVEL_M = 0, ECCLEVEL_Q = 3, ECCLEVEL_H = 2;
  

  var GF256_MAP = [], GF256_INVMAP = [-1];
  for (var i = 0, v = 1; i < 255; ++i) {
      GF256_MAP.push(v);
      GF256_INVMAP[v] = i;
      v = (v * 2) ^ (v >= 128 ? 0x11d : 0);
  }
  
  var GF256_GENPOLY = [[]];
  for (var i = 0; i < 30; ++i) {
      var prevpoly = GF256_GENPOLY[i], poly = [];
      for (var j = 0; j <= i; ++j) {
          var a = (j < i ? GF256_MAP[prevpoly[j]] : 0);
          var b = GF256_MAP[(i + (prevpoly[j-1] || 0)) % 255];
          poly.push(GF256_INVMAP[a ^ b]);
      }
      GF256_GENPOLY.push(poly);
  }
  

  var ALPHANUMERIC_MAP = {};
  for (var i = 0; i < 45; ++i) {
      ALPHANUMERIC_MAP['0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'.charAt(i)] = i;
  }
  

  var MASKFUNCS = [
      function(i,j) { return (i+j) % 2 == 0; },
      function(i,j) { return i % 2 == 0; },
      function(i,j) { return j % 3 == 0; },
      function(i,j) { return (i+j) % 3 == 0; },
      function(i,j) { return (((i/2)|0) + ((j/3)|0)) % 2 == 0; },
      function(i,j) { return (i*j) % 2 + (i*j) % 3 == 0; },
      function(i,j) { return ((i*j) % 2 + (i*j) % 3) % 2 == 0; },
      function(i,j) { return ((i+j) % 2 + (i*j) % 3) % 2 == 0; }];
  
  // returns true when the version information has to be embeded.
  var needsverinfo = function(ver) { return ver > 6; };
  
  // returns the size of entire QR code for given version.
  var getsizebyver = function(ver) { return 4 * ver + 17; };
  
  // returns the number of bits available for code words in this version.
  var nfullbits = function(ver) {

      var v = VERSIONS[ver];
      var nbits = 16*ver*ver + 128*ver + 64; // finder, timing and format info.
      if (needsverinfo(ver)) nbits -= 36; // version information
      if (v[2].length) { // alignment patterns
          nbits -= 25 * v[2].length * v[2].length - 10 * v[2].length - 55;
      }
      return nbits;
  };
  
  // returns the number of bits available for data portions (i.e. excludes ECC
  // bits but includes mode and length bits) in this version and ECC level.
  var ndatabits = function(ver, ecclevel) {
      var nbits = nfullbits(ver) & ~7; // no sub-octet code words
      var v = VERSIONS[ver];
      nbits -= 8 * v[0][ecclevel] * v[1][ecclevel]; // ecc bits
      return nbits;
  }
  
  // returns the number of bits required for the length of data.
  // (cf. Table 3 in JIS X 0510:2004 p. 16)
  var ndatalenbits = function(ver, mode) {
      switch (mode) {
      case MODE_NUMERIC: return (ver < 10 ? 10 : ver < 27 ? 12 : 14);
      case MODE_ALPHANUMERIC: return (ver < 10 ? 9 : ver < 27 ? 11 : 13);
      case MODE_OCTET: return (ver < 10 ? 8 : 16);
      case MODE_KANJI: return (ver < 10 ? 8 : ver < 27 ? 10 : 12);
      }
  };
  
  // returns the maximum length of data possible in given configuration.
  var getmaxdatalen = function(ver, mode, ecclevel) {
      var nbits = ndatabits(ver, ecclevel) - 4 - ndatalenbits(ver, mode); // 4 for mode bits
      switch (mode) {
      case MODE_NUMERIC:
          return ((nbits/10) | 0) * 3 + (nbits%10 < 4 ? 0 : nbits%10 < 7 ? 1 : 2);
      case MODE_ALPHANUMERIC:
          return ((nbits/11) | 0) * 2 + (nbits%11 < 6 ? 0 : 1);
      case MODE_OCTET:
          return (nbits/8) | 0;
      case MODE_KANJI:
          return (nbits/13) | 0;
      }
  };
  
  // checks if the given data can be encoded in given mode, and returns
  // the converted data for the further processing if possible. otherwise
  // returns null.
  //
  // this function does not check the length of data; it is a duty of
  // encode function below (as it depends on the version and ECC level too).
  var validatedata = function(mode, data) {
      switch (mode) {
      case MODE_NUMERIC:
          if (!data.match(NUMERIC_REGEXP)) return null;
          return data;
  
      case MODE_ALPHANUMERIC:
          if (!data.match(ALPHANUMERIC_REGEXP)) return null;
          return data.toUpperCase();
  
      case MODE_OCTET:
          if (typeof data === 'string') { // encode as utf-8 string
              var newdata = [];
              for (var i = 0; i < data.length; ++i) {
                  var ch = data.charCodeAt(i);
                  if (ch < 0x80) {
                      newdata.push(ch);
                  } else if (ch < 0x800) {
                      newdata.push(0xc0 | (ch >> 6),
                          0x80 | (ch & 0x3f));
                  } else if (ch < 0x10000) {
                      newdata.push(0xe0 | (ch >> 12),
                          0x80 | ((ch >> 6) & 0x3f),
                          0x80 | (ch & 0x3f));
                  } else {
                      newdata.push(0xf0 | (ch >> 18),
                          0x80 | ((ch >> 12) & 0x3f),
                          0x80 | ((ch >> 6) & 0x3f),
                          0x80 | (ch & 0x3f));
                  }
              }
              return newdata;
          } else {
              return data;
          }
      }
  };
  
  // returns the code words (sans ECC bits) for given data and configurations.
  // requires data to be preprocessed by validatedata. no length check is
  // performed, and everything has to be checked before calling this function.
  var encode = function(ver, mode, data, maxbuflen) {
      var buf = [];
      var bits = 0, remaining = 8;
      var datalen = data.length;
  
      // this function is intentionally no-op when n=0.
      var pack = function(x, n) {
          if (n >= remaining) {
              buf.push(bits | (x >> (n -= remaining)));
              while (n >= 8) buf.push((x >> (n -= 8)) & 255);
              bits = 0;
              remaining = 8;
          }
          if (n > 0) bits |= (x & ((1 << n) - 1)) << (remaining -= n);
      };
  
      var nlenbits = ndatalenbits(ver, mode);
      pack(mode, 4);
      pack(datalen, nlenbits);
  
      switch (mode) {
      case MODE_NUMERIC:
          for (var i = 2; i < datalen; i += 3) {
              pack(parseInt(data.substring(i-2,i+1), 10), 10);
          }
          pack(parseInt(data.substring(i-2), 10), [0,4,7][datalen%3]);
          break;
  
      case MODE_ALPHANUMERIC:
          for (var i = 1; i < datalen; i += 2) {
              pack(ALPHANUMERIC_MAP[data.charAt(i-1)] * 45 +
                  ALPHANUMERIC_MAP[data.charAt(i)], 11);
          }
          if (datalen % 2 == 1) {
              pack(ALPHANUMERIC_MAP[data.charAt(i-1)], 6);
          }
          break;
  
      case MODE_OCTET:
          for (var i = 0; i < datalen; ++i) {
              pack(data[i], 8);
          }
          break;
      };
  
      // final bits. it is possible that adding terminator causes the buffer
      // to overflow, but then the buffer truncated to the maximum size will
      // be valid as the truncated terminator mode bits and padding is
      // identical in appearance (cf. JIS X 0510:2004 sec 8.4.8).
      pack(MODE_TERMINATOR, 4);
      if (remaining < 8) buf.push(bits);
  
      // the padding to fill up the remaining space. we should not add any
      // words when the overflow already occurred.
      while (buf.length + 1 < maxbuflen) buf.push(0xec, 0x11);
      if (buf.length < maxbuflen) buf.push(0xec);
      return buf;
  };
  
  // calculates ECC code words for given code words and generator polynomial.
  //
  // this is quite similar to CRC calculation as both Reed-Solomon and CRC use
  // the certain kind of cyclic codes, which is effectively the division of
  // zero-augumented polynomial by the generator polynomial. the only difference
  // is that Reed-Solomon uses GF(2^8), instead of CRC's GF(2), and Reed-Solomon
  // uses the different generator polynomial than CRC's.
  var calculateecc = function(poly, genpoly) {
      var modulus = poly.slice(0);
      var polylen = poly.length, genpolylen = genpoly.length;
      for (var i = 0; i < genpolylen; ++i) modulus.push(0);
      for (var i = 0; i < polylen; ) {
          var quotient = GF256_INVMAP[modulus[i++]];
          if (quotient >= 0) {
              for (var j = 0; j < genpolylen; ++j) {
                  modulus[i+j] ^= GF256_MAP[(quotient + genpoly[j]) % 255];
              }
          }
      }
      return modulus.slice(polylen);
  };
  
  // auguments ECC code words to given code words. the resulting words are
  // ready to be encoded in the matrix.
  //
  // the much of actual augumenting procedure follows JIS X 0510:2004 sec 8.7.
  // the code is simplified using the fact that the size of each code & ECC
  // blocks is almost same; for example, when we have 4 blocks and 46 data words
  // the number of code words in those blocks are 11, 11, 12, 12 respectively.
  var augumenteccs = function(poly, nblocks, genpoly) {
      var subsizes = [];
      var subsize = (poly.length / nblocks) | 0, subsize0 = 0;
      var pivot = nblocks - poly.length % nblocks;
      for (var i = 0; i < pivot; ++i) {
          subsizes.push(subsize0);
          subsize0 += subsize;
      }
      for (var i = pivot; i < nblocks; ++i) {
          subsizes.push(subsize0);
          subsize0 += subsize+1;
      }
      subsizes.push(subsize0);
  
      var eccs = [];
      for (var i = 0; i < nblocks; ++i) {
          eccs.push(calculateecc(poly.slice(subsizes[i], subsizes[i+1]), genpoly));
      }
  
      var result = [];
      var nitemsperblock = (poly.length / nblocks) | 0;
      for (var i = 0; i < nitemsperblock; ++i) {
          for (var j = 0; j < nblocks; ++j) {
              result.push(poly[subsizes[j] + i]);
          }
      }
      for (var j = pivot; j < nblocks; ++j) {
          result.push(poly[subsizes[j+1] - 1]);
      }
      for (var i = 0; i < genpoly.length; ++i) {
          for (var j = 0; j < nblocks; ++j) {
              result.push(eccs[j][i]);
          }
      }
      return result;
  };
  
  // auguments BCH(p+q,q) code to the polynomial over GF(2), given the proper
  // genpoly. the both input and output are in binary numbers, and unlike
  // calculateecc genpoly should include the 1 bit for the highest degree.
  //
  // actual polynomials used for this procedure are as follows:
  // - p=10, q=5, genpoly=x^10+x^8+x^5+x^4+x^2+x+1 (JIS X 0510:2004 Appendix C)
  // - p=18, q=6, genpoly=x^12+x^11+x^10+x^9+x^8+x^5+x^2+1 (ibid. Appendix D)
  var augumentbch = function(poly, p, genpoly, q) {
      var modulus = poly << q;
      for (var i = p - 1; i >= 0; --i) {
          if ((modulus >> (q+i)) & 1) modulus ^= genpoly << i;
      }
      return (poly << q) | modulus;
  };
  
  // creates the base matrix for given version. it returns two matrices, one of
  // them is the actual one and the another represents the "reserved" portion
  // (e.g. finder and timing patterns) of the matrix.
  //
  // some entries in the matrix may be undefined, rather than 0 or 1. this is
  // intentional (no initialization needed!), and putdata below will fill
  // the remaining ones.
  var makebasematrix = function(ver) {
      var v = VERSIONS[ver], n = getsizebyver(ver);
      var matrix = [], reserved = [];
      for (var i = 0; i < n; ++i) {
          matrix.push([]);
          reserved.push([]);
      }
  
      var blit = function(y, x, h, w, bits) {
          for (var i = 0; i < h; ++i) {
              for (var j = 0; j < w; ++j) {
                  matrix[y+i][x+j] = (bits[i] >> j) & 1;
                  reserved[y+i][x+j] = 1;
              }
          }
      };
  
      // finder patterns and a part of timing patterns
      // will also mark the format information area (not yet written) as reserved.
      blit(0, 0, 9, 9, [0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x17f, 0x00, 0x40]);
      blit(n-8, 0, 8, 9, [0x100, 0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x7f]);
      blit(0, n-8, 9, 8, [0xfe, 0x82, 0xba, 0xba, 0xba, 0x82, 0xfe, 0x00, 0x00]);
  
      // the rest of timing patterns
      for (var i = 9; i < n-8; ++i) {
          matrix[6][i] = matrix[i][6] = ~i & 1;
          reserved[6][i] = reserved[i][6] = 1;
      }
  
      // alignment patterns
      var aligns = v[2], m = aligns.length;
      for (var i = 0; i < m; ++i) {
          var minj = (i==0 || i==m-1 ? 1 : 0), maxj = (i==0 ? m-1 : m);
          for (var j = minj; j < maxj; ++j) {
              blit(aligns[i], aligns[j], 5, 5, [0x1f, 0x11, 0x15, 0x11, 0x1f]);
          }
      }
  
      // version information
      if (needsverinfo(ver)) {
          var code = augumentbch(ver, 6, 0x1f25, 12);
          var k = 0;
          for (var i = 0; i < 6; ++i) {
              for (var j = 0; j < 3; ++j) {
                  matrix[i][(n-11)+j] = matrix[(n-11)+j][i] = (code >> k++) & 1;
                  reserved[i][(n-11)+j] = reserved[(n-11)+j][i] = 1;
              }
          }
      }
  
      return {matrix: matrix, reserved: reserved};
  };
  
  // fills the data portion (i.e. unmarked in reserved) of the matrix with given
  // code words. the size of code words should be no more than available bits,
  // and remaining bits are padded to 0 (cf. JIS X 0510:2004 sec 8.7.3).
  var putdata = function(matrix, reserved, buf) {
      var n = matrix.length;
      var k = 0, dir = -1;
      for (var i = n-1; i >= 0; i -= 2) {
          if (i == 6) --i; // skip the entire timing pattern column
          var jj = (dir < 0 ? n-1 : 0);
          for (var j = 0; j < n; ++j) {
              for (var ii = i; ii > i-2; --ii) {
                  if (!reserved[jj][ii]) {
                      // may overflow, but (undefined >> x)
                      // is 0 so it will auto-pad to zero.
                      matrix[jj][ii] = (buf[k >> 3] >> (~k&7)) & 1;
                      ++k;
                  }
              }
              jj += dir;
          }
          dir = -dir;
      }
      return matrix;
  };
  
  // XOR-masks the data portion of the matrix. repeating the call with the same
  // arguments will revert the prior call (convenient in the matrix evaluation).
  var maskdata = function(matrix, reserved, mask) {
      var maskf = MASKFUNCS[mask];
      var n = matrix.length;
      for (var i = 0; i < n; ++i) {
          for (var j = 0; j < n; ++j) {
              if (!reserved[i][j]) matrix[i][j] ^= maskf(i,j);
          }
      }
      return matrix;
  }
  
  // puts the format information.
  var putformatinfo = function(matrix, reserved, ecclevel, mask) {
      var n = matrix.length;
      var code = augumentbch((ecclevel << 3) | mask, 5, 0x537, 10) ^ 0x5412;
      for (var i = 0; i < 15; ++i) {
          var r = [0,1,2,3,4,5,7,8,n-7,n-6,n-5,n-4,n-3,n-2,n-1][i];
          var c = [n-1,n-2,n-3,n-4,n-5,n-6,n-7,n-8,7,5,4,3,2,1,0][i];
          matrix[r][8] = matrix[8][c] = (code >> i) & 1;
          // we don't have to mark those bits reserved; always done
          // in makebasematrix above.
      }
      return matrix;
  };
  
  // evaluates the resulting matrix and returns the score (lower is better).
  // (cf. JIS X 0510:2004 sec 8.8.2)
  //
  // the evaluation procedure tries to avoid the problematic patterns naturally
  // occuring from the original matrix. for example, it penaltizes the patterns
  // which just look like the finder pattern which will confuse the decoder.
  // we choose the mask which results in the lowest score among 8 possible ones.
  //
  // note: zxing seems to use the same procedure and in many cases its choice
  // agrees to ours, but sometimes it does not. practically it doesn't matter.
  var evaluatematrix = function(matrix) {
      // N1+(k-5) points for each consecutive row of k same-colored modules,
      // where k >= 5. no overlapping row counts.
      var PENALTY_CONSECUTIVE = 3;
      // N2 points for each 2x2 block of same-colored modules.
      // overlapping block does count.
      var PENALTY_TWOBYTWO = 3;
      // N3 points for each pattern with >4W:1B:1W:3B:1W:1B or
      // 1B:1W:3B:1W:1B:>4W, or their multiples (e.g. highly unlikely,
      // but 13W:3B:3W:9B:3W:3B counts).
      var PENALTY_FINDERLIKE = 40;
      // N4*k points for every (5*k)% deviation from 50% black density.
      // i.e. k=1 for 55~60% and 40~45%, k=2 for 60~65% and 35~40%, etc.
      var PENALTY_DENSITY = 10;
  
      var evaluategroup = function(groups) { // assumes [W,B,W,B,W,...,B,W]
          var score = 0;
          for (var i = 0; i < groups.length; ++i) {
              if (groups[i] >= 5) score += PENALTY_CONSECUTIVE + (groups[i]-5);
          }
          for (var i = 5; i < groups.length; i += 2) {
              var p = groups[i];
              if (groups[i-1] == p && groups[i-2] == 3*p && groups[i-3] == p &&
                      groups[i-4] == p && (groups[i-5] >= 4*p || groups[i+1] >= 4*p)) {
                  // this part differs from zxing...
                  score += PENALTY_FINDERLIKE;
              }
          }
          return score;
      };
  
      var n = matrix.length;
      var score = 0, nblacks = 0;
      for (var i = 0; i < n; ++i) {
          var row = matrix[i];
          var groups;
  
          // evaluate the current row
          groups = [0]; // the first empty group of white
          for (var j = 0; j < n; ) {
              var k;
              for (k = 0; j < n && row[j]; ++k) ++j;
              groups.push(k);
              for (k = 0; j < n && !row[j]; ++k) ++j;
              groups.push(k);
          }
          score += evaluategroup(groups);
  
          // evaluate the current column
          groups = [0];
          for (var j = 0; j < n; ) {
              var k;
              for (k = 0; j < n && matrix[j][i]; ++k) ++j;
              groups.push(k);
              for (k = 0; j < n && !matrix[j][i]; ++k) ++j;
              groups.push(k);
          }
          score += evaluategroup(groups);
  
          // check the 2x2 box and calculate the density
          var nextrow = matrix[i+1] || [];
          nblacks += row[0];
          for (var j = 1; j < n; ++j) {
              var p = row[j];
              nblacks += p;
              // at least comparison with next row should be strict...
              if (row[j-1] == p && nextrow[j] === p && nextrow[j-1] === p) {
                  score += PENALTY_TWOBYTWO;
              }
          }
      }
  
      score += PENALTY_DENSITY * ((Math.abs(nblacks / n / n - 0.5) / 0.05) | 0);
      return score;
  };
  
  // returns the fully encoded QR code matrix which contains given data.
  // it also chooses the best mask automatically when mask is -1.
  var generate = function(data, ver, mode, ecclevel, mask) {
      var v = VERSIONS[ver];
      var buf = encode(ver, mode, data, ndatabits(ver, ecclevel) >> 3);
      buf = augumenteccs(buf, v[1][ecclevel], GF256_GENPOLY[v[0][ecclevel]]);
  
      var result = makebasematrix(ver);
      var matrix = result.matrix, reserved = result.reserved;
      putdata(matrix, reserved, buf);
  
      if (mask < 0) {
          // find the best mask
          maskdata(matrix, reserved, 0);
          putformatinfo(matrix, reserved, ecclevel, 0);
          var bestmask = 0, bestscore = evaluatematrix(matrix);
          maskdata(matrix, reserved, 0);
          for (mask = 1; mask < 8; ++mask) {
              maskdata(matrix, reserved, mask);
              putformatinfo(matrix, reserved, ecclevel, mask);
              var score = evaluatematrix(matrix);
              if (bestscore > score) {
                  bestscore = score;
                  bestmask = mask;
              }
              maskdata(matrix, reserved, mask);
          }
          mask = bestmask;
      }
  
      maskdata(matrix, reserved, mask);
      putformatinfo(matrix, reserved, ecclevel, mask);
      return matrix;
  };
  
  // the public interface is trivial; the options available are as follows:
  //
  // - version: an integer in [1,40]. when omitted (or -1) the smallest possible
  //   version is chosen.
  // - mode: one of 'numeric', 'alphanumeric', 'octet'. when omitted the smallest
  //   possible mode is chosen.
  // - ecclevel: one of 'L', 'M', 'Q', 'H'. defaults to 'L'.
  // - mask: an integer in [0,7]. when omitted (or -1) the best mask is chosen.
  //
  // for generate{HTML,PNG}:
  //
  // - modulesize: a number. this is a size of each modules in pixels, and
  //   defaults to 5px.
  // - margin: a number. this is a size of margin in *modules*, and defaults to
  //   4 (white modules). the specficiation mandates the margin no less than 4
  //   modules, so it is better not to alter this value unless you know what
  //   you're doing.
  var QRCode = {
      'generate': function(data, options) {
          var MODES = {'numeric': MODE_NUMERIC, 'alphanumeric': MODE_ALPHANUMERIC,
              'octet': MODE_OCTET};
          var ECCLEVELS = {'L': ECCLEVEL_L, 'M': ECCLEVEL_M, 'Q': ECCLEVEL_Q,
              'H': ECCLEVEL_H};
  
          options = options || {};
          var ver = options.version || -1;
          var ecclevel = ECCLEVELS[(options.ecclevel || 'L').toUpperCase()];
          var mode = options.mode ? MODES[options.mode.toLowerCase()] : -1;
          var mask = 'mask' in options ? options.mask : -1;
  
          if (mode < 0) {
              if (typeof data === 'string') {
                  if (data.match(NUMERIC_REGEXP)) {
                      mode = MODE_NUMERIC;
                  } else if (data.match(ALPHANUMERIC_OUT_REGEXP)) {
                      // while encode supports case-insensitive
                      // encoding, we restrict the data to be
                      // uppercased when auto-selecting the mode.
                      mode = MODE_ALPHANUMERIC;
                  } else {
                      mode = MODE_OCTET;
                  }
              } else {
                  mode = MODE_OCTET;
              }
          } else if (!(mode == MODE_NUMERIC || mode == MODE_ALPHANUMERIC ||
                  mode == MODE_OCTET)) {
              throw 'invalid or unsupported mode';
          }
  
          data = validatedata(mode, data);
          if (data === null) throw 'invalid data format';
  
          if (ecclevel < 0 || ecclevel > 3) throw 'invalid ECC level';
  
          if (ver < 0) {
              for (ver = 1; ver <= 40; ++ver) {
                  if (data.length <= getmaxdatalen(ver, mode, ecclevel)) break;
              }
              if (ver > 40) throw 'too large data';
          } else if (ver < 1 || ver > 40) {
              throw 'invalid version';
          }
  
          if (mask != -1 && (mask < 0 || mask > 8)) throw 'invalid mask';
  
          return generate(data, ver, mode, ecclevel, mask);
      },
  
      'generateHTML': function(data, options) {
          options = options || {};
          var matrix = QRCode['generate'](data, options);
          var modsize = Math.max(options.modulesize || 5, 0.5);
          var margin = Math.max(options.margin !== null ? options.margin : 4, 0.0);
  
          var e = document.createElement('div');
          var n = matrix.length;
          var html = ['<table border="0" cellspacing="0" cellpadding="0" style="border:' +
              modsize*margin + 'px solid #fff;background:#fff">'];
          for (var i = 0; i < n; ++i) {
              html.push('<tr>');
              for (var j = 0; j < n; ++j) {
                  html.push('<td style="width:' + modsize + 'px;height:' + modsize + 'px' +
                      (matrix[i][j] ? ';background:#000' : '') + '"></td>');
              }
              html.push('</tr>');
          }
          e.className = 'qrcode';
          e.innerHTML = html.join('') + '</table>';
          return e;
      },
  
      'generateSVG': function(data, options) {
          options = options || {};
          var matrix = QRCode['generate'](data, options);
          var n = matrix.length;
          var modsize = Math.max(options.modulesize || 5, 0.5);
          var margin = Math.max(options.margin? options.margin : 4, 0.0);
          var size = modsize * (n + 2 * margin);
  
          var common = ' class= "fg"'+' width="'+modsize+'" height="'+modsize+'"/>';
  
          var e = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          e.setAttribute('viewBox', '0 0 '+size+' '+size);
          e.setAttribute('style', 'shape-rendering:crispEdges');
  
          var svg = [
              '<style scoped>.bg{fill:#FFF}.fg{fill:#000}</style>',
              '<rect class="bg" x="0" y="0"',
              'width="'+size+'" height="'+size+'"/>',
          ];
  
          var yo = margin * modsize;
          for (var y = 0; y < n; ++y) {
              var xo = margin * modsize;
              for (var x = 0; x < n; ++x) {
                  if (matrix[y][x])
                      svg.push('<rect x="'+xo+'" y="'+yo+'"', common);
                  xo += modsize;
              }
              yo += modsize;
          }
          e.innerHTML = svg.join('');
          return e;
      },
  
      'generatePNG': function(data, options) {
          options = options || {};
          var matrix = QRCode['generate'](data, options);
          var modsize = Math.max(options.modulesize || 5, 0.5);
          var margin = Math.max(options.margin != null ? options.margin : 4, 0.0);
          var n = matrix.length;
          var size = modsize * (n + 2 * margin);
  
          var canvas = document.createElement('canvas'), context;
          canvas.width = canvas.height = size;
          context = canvas.getContext('2d');
          if (!context) throw 'canvas support is needed for PNG output';
  
          context.fillStyle = '#fff';
          context.fillRect(0, 0, size, size);
          context.fillStyle = '#000';
          for (var i = 0; i < n; ++i) {
              for (var j = 0; j < n; ++j) {
                  if (matrix[i][j]) {
                      context.fillRect(modsize * (margin + j),
                          modsize * (margin + i),
                          modsize, modsize);
                  }
              }
          }
          //context.fillText('evaluation: ' + evaluatematrix(matrix), 10, 10);
          return canvas.toDataURL();
      }
  };
  
  return QRCode;
  });