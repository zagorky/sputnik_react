import './Footer.css'
// import 'fonts.css'
// import'normalize.css'
import logo from '/public/logo.png'


function Footer () {

    return (
<footer>
  <div class="First-footer">
      <div class="First-footer-container">
      <div class="logo"><img src={logo} alt={name} srcset="" /></div>
          <div class="nav">
            <ul class="nav-links">
              <li>Каталог</li>
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Где купить Sputnik</li>
            </ul>            
          </div>
          <div class="fafablk">
            <div class="fa-fa">
              <div class="inst">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5 20.411C39.5 31.4171 30.76 40.3219 20 40.3219C9.23999 40.3219 0.5 31.4171 0.5 20.411C0.5 9.4048 9.23999 0.5 20 0.5C30.76 0.5 39.5 9.4048 39.5 20.411Z" stroke="black" stroke-opacity="0.2"/>
                  <path d="M19.6692 14.1768C18.2149 14.1768 16.8202 14.7536 15.7919 15.7803C14.7635 16.8071 14.1858 18.1997 14.1858 19.6517C14.1858 21.1037 14.7635 22.4963 15.7919 23.5231C16.8202 24.5498 18.2149 25.1266 19.6692 25.1266C21.1236 25.1266 22.5183 24.5498 23.5466 23.5231C24.575 22.4963 25.1527 21.1037 25.1527 19.6517C25.1527 18.1997 24.575 16.8071 23.5466 15.7803C22.5183 14.7536 21.1236 14.1768 19.6692 14.1768ZM19.6692 23.2073C18.7245 23.2073 17.8184 22.8326 17.1503 22.1656C16.4822 21.4985 16.1069 20.5938 16.1069 19.6505C16.1069 18.7072 16.4822 17.8025 17.1503 17.1355C17.8184 16.4684 18.7245 16.0937 19.6692 16.0937C20.614 16.0937 21.5201 16.4684 22.1882 17.1355C22.8563 17.8025 23.2316 18.7072 23.2316 19.6505C23.2316 20.5938 22.8563 21.4985 22.1882 22.1656C21.5201 22.8326 20.614 23.2073 19.6692 23.2073Z" fill="black" fill-opacity="0.2"/>
                  <path d="M25.3697 15.2515C26.0757 15.2515 26.648 14.68 26.648 13.9751C26.648 13.2702 26.0757 12.6987 25.3697 12.6987C24.6637 12.6987 24.0913 13.2702 24.0913 13.9751C24.0913 14.68 24.6637 15.2515 25.3697 15.2515Z" fill="black" fill-opacity="0.2"/>
                  <path d="M30.4173 12.7886C30.1344 12.0594 29.7022 11.3972 29.1483 10.8444C28.5944 10.2915 27.931 9.86028 27.2006 9.57818C26.3458 9.25781 25.4428 9.08458 24.53 9.06587C23.3535 9.01464 22.9809 9 19.9976 9C17.0142 9 16.6318 9 15.4651 9.06587C14.553 9.08362 13.6506 9.25689 12.797 9.57818C12.0663 9.85995 11.4028 10.2911 10.8488 10.844C10.2949 11.3969 9.86278 12.0592 9.5803 12.7886C9.25937 13.642 9.08627 14.5437 9.06841 15.4551C9.01588 16.6285 9 17.0006 9 19.9805C9 22.9592 9 23.3385 9.06841 24.5059C9.08674 25.4183 9.259 26.3185 9.5803 27.1735C9.86358 27.9027 10.2961 28.5648 10.8502 29.1176C11.4042 29.6704 12.0677 30.1017 12.7982 30.384C13.6502 30.7172 14.553 30.9029 15.4676 30.9329C16.644 30.9841 17.0167 31 20 31C22.9833 31 23.3657 31 24.5324 30.9329C25.4452 30.9144 26.3481 30.7416 27.203 30.4218C27.9333 30.1391 28.5965 29.7074 29.1503 29.1544C29.7042 28.6014 30.1365 27.9393 30.4197 27.2101C30.741 26.3563 30.9133 25.4561 30.9316 24.5437C30.9841 23.3703 31 22.9982 31 20.0183C31 17.0384 31 16.6602 30.9316 15.4929C30.9174 14.5686 30.7434 13.6538 30.4173 12.7886ZM28.9293 24.4156C28.9214 25.1186 28.7929 25.815 28.5493 26.4746C28.3658 26.9489 28.085 27.3797 27.7248 27.7391C27.3646 28.0986 26.933 28.3788 26.4578 28.5617C25.8045 28.8037 25.1144 28.932 24.4176 28.941C23.257 28.9947 22.9296 29.0081 19.9536 29.0081C16.9751 29.0081 16.6709 29.0081 15.4883 28.941C14.7919 28.9325 14.1021 28.8042 13.4494 28.5617C12.9725 28.3799 12.5392 28.1002 12.1775 27.7407C11.8157 27.3812 11.5336 26.9499 11.3493 26.4746C11.1092 25.8221 10.9807 25.1339 10.9693 24.4388C10.9168 23.28 10.9046 22.9531 10.9046 19.9817C10.9046 17.0091 10.9046 16.7054 10.9693 15.5234C10.9772 14.8208 11.1058 14.1248 11.3493 13.4656C11.7219 12.5032 12.4855 11.7457 13.4494 11.3774C14.1025 11.136 14.792 11.0077 15.4883 10.998C16.6502 10.9456 16.9763 10.9309 19.9536 10.9309C22.9308 10.9309 23.2362 10.9309 24.4176 10.998C25.1145 11.0064 25.8046 11.1347 26.4578 11.3774C26.9329 11.5607 27.3645 11.8411 27.7246 12.2007C28.0848 12.5604 28.3657 12.9912 28.5493 13.4656C28.7894 14.1181 28.9179 14.8064 28.9293 15.5014C28.9818 16.6615 28.9952 16.9871 28.9952 19.9597C28.9952 22.9311 28.9952 23.2507 28.9427 24.4168H28.9293V24.4156Z" fill="black" fill-opacity="0.2"/>
                  </svg>
              </div>
              <div class="vk">
                <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5 21.0482C39.5 32.0543 30.76 40.9591 20 40.9591C9.23999 40.9591 0.5 32.0543 0.5 21.0482C0.5 10.042 9.23999 1.13721 20 1.13721C30.76 1.13721 39.5 10.042 39.5 21.0482Z" stroke="black" stroke-opacity="0.2"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3625 23.8552C29.3625 23.8552 31.3029 25.811 31.7829 26.716C31.7922 26.729 31.7995 26.7435 31.8045 26.7588C32.0001 27.0932 32.0481 27.3553 31.9521 27.5487C31.7901 27.8684 31.2417 28.0288 31.0557 28.0423H27.6261C27.3873 28.0423 26.8905 27.9786 26.2857 27.5524C25.8237 27.223 25.3641 26.6805 24.9189 26.1502C24.2541 25.3627 23.6793 24.6794 23.0973 24.6794C23.0238 24.6792 22.9508 24.6916 22.8813 24.7161C22.4409 24.8582 21.8817 25.4987 21.8817 27.2046C21.8817 27.7386 21.4689 28.0423 21.1797 28.0423H19.6089C19.0737 28.0423 16.2873 27.8512 13.8165 25.1925C10.7889 21.9374 8.06971 15.4075 8.04331 15.3499C7.87411 14.9274 8.22931 14.6972 8.61331 14.6972H12.0765C12.5409 14.6972 12.6921 14.9838 12.7977 15.2409C12.9201 15.5361 13.3737 16.7167 14.1177 18.043C15.3225 20.2008 16.0629 21.0789 16.6545 21.0789C16.7657 21.0792 16.8749 21.0496 16.9713 20.9932C17.7441 20.5596 17.6001 17.7429 17.5641 17.1624C17.5641 17.0498 17.5629 15.9047 17.1669 15.3512C16.8837 14.9544 16.4013 14.8001 16.1097 14.7437C16.1877 14.6286 16.3533 14.4523 16.5657 14.3482C17.0949 14.0787 18.0513 14.0396 19.0005 14.0396H19.5273C20.5569 14.0542 20.8233 14.1216 21.1977 14.2184C21.9513 14.402 21.9657 14.9005 21.8997 16.5979C21.8805 17.0828 21.8601 17.629 21.8601 18.272C21.8601 18.4091 21.8541 18.5622 21.8541 18.7177C21.8313 19.5885 21.8013 20.5694 22.4037 20.9723C22.4818 21.022 22.5721 21.0483 22.6641 21.0483C22.8729 21.0483 23.4981 21.0483 25.1937 18.0785C25.9377 16.7669 26.5137 15.2201 26.5533 15.1038C26.5869 15.0389 26.6877 14.8564 26.8101 14.7829C26.8972 14.7356 26.9947 14.712 27.0933 14.7143H31.1673C31.6113 14.7143 31.9125 14.7829 31.9713 14.9544C32.0697 15.2324 31.9521 16.0811 30.0921 18.6479C29.7789 19.0753 29.5041 19.4452 29.2629 19.7685C27.5769 22.0268 27.5769 22.1407 29.3625 23.8552Z" fill="black" fill-opacity="0.2"/>
                  </svg>
              </div>
              <div class="fb">
                <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.5 21.0482C39.5 32.0543 30.76 40.9591 20 40.9591C9.23999 40.9591 0.5 32.0543 0.5 21.0482C0.5 10.042 9.23999 1.13721 20 1.13721C30.76 1.13721 39.5 10.042 39.5 21.0482Z" stroke="black" stroke-opacity="0.2"/>
                  <g clip-path="url(#clip0_81_188)">
                  <path d="M17.6915 33.2944V22.2804H15.0005V18.3148H17.6915V14.9277C17.6915 12.266 19.2811 9.82178 22.9439 9.82178C24.4269 9.82178 25.5235 9.97564 25.5235 9.97564L25.4371 13.6788C25.4371 13.6788 24.3187 13.667 23.0983 13.667C21.7774 13.667 21.5658 14.3258 21.5658 15.4192V18.3148H25.5421L25.369 22.2804H21.5658V33.2944H17.6915Z" fill="black" fill-opacity="0.2"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_81_188">
                  <rect width="10.5416" height="23.4726" fill="white" transform="translate(15 9.82178)"/>
                  </clipPath>
                  </defs>
                  </svg>                 
              </div>
          </div>
          </div>          
      </div>
  </div>
  <div class="Second-footer">
      <div class="Second-footer-text">
        <p>© 2017-2020 Все права защищены. Использование материалов с сайта без разрешения запрещено!
        </p>
      </div>  
  </div>
</footer>
)
}

export default Footer