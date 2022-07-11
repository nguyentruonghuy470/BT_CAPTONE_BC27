main();

function main() {
  apiGetProducts().then(function (result) {
    let products = result.data;

    for (let i = 0; i < products.length; i++) {
      let product = products[i];
        product.id,
        product.name ,
        product.price,
        product.screen,
        product.backCamera ,
        product.frontCamera,
        product.img ,
        product.desc,
        product.type
    };
      display(products);
    })
}

const display = (products) => {
   
    let html = "";
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      html += ` <li class="st-col-item">
      <div class="single-product-wrap">
        <div class="product-image">
          <a
            class="pro-img"
            href="/collections/all/products/ladies-dress"
          >
            <img
              class="img-fluid img1"
              src="${product.img}"
              alt="CBD Chocolate"
            />
            <img
              class="img-fluid img2"
              src="//cdn.shopify.com/s/files/1/0569/2591/3250/products/p11_558X600_crop_center.jpg?v=1622304437"
              alt="CBD Chocolate"
            />
          </a>
          <div class="product-label">
            <span class="percent-count">-17%</span>
          </div>
          <div class="product-action">
            <a class="cart-title">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <a class="quick-view">
              <i class="fa-solid fa-eye"></i>
            </a>
            <a class="Wishlist">
              <i class="fa-solid fa-heart"></i>
            </a>
          </div>
          <div class="product-detail">
            <h4>Thông tin chi tiết</h4>
            <p class="textscreen">Screen 68</p>
            <p class="textfrontCamera">
              FrontCamera: 7 MP
            </p>
            <p class="textfrontCamera">
              FrontCamera: 7 MP
            </p>
            <p class="textbackCamera">
              BackCamera 2: Camera 12 MP
            </p>
            <p class="text-desc">
              Thiết kế mang tính đột phá
            </p>
          </div>
        </div>
        <div class="product-content">
          <div class="product-title">
            <a
              href="/collections/all/products/ladies-dress"
              title="CBD Chocolate"
              >CBD Chocolate</a
            >
          </div>
          <div class="price-box">
            <span class="new-price">$193.00</span>
          </div>
          <div class="product-ratting">
            <span
              class="spr-badge"
              id="spr_badge_6791669448866"
              data-rating="4.0"
              ><span
                class="spr-starrating spr-badge-starrating"
                ><i
                  class="spr-icon spr-icon-star"
                  aria-hidden="true"
                ></i
                ><i
                  class="spr-icon spr-icon-star"
                  aria-hidden="true"
                ></i
                ><i
                  class="spr-icon spr-icon-star"
                  aria-hidden="true"
                ></i
                ><i
                  class="spr-icon spr-icon-star"
                  aria-hidden="true"
                ></i
                ><i
                  class="spr-icon spr-icon-star-empty"
                  aria-hidden="true"
                ></i></span
              ><span class="spr-badge-caption"
                >1 review</span
              >
            </span>
          </div>
        </div>
      </div>
    </li>`
    }
    document.getElementById("tblProduct").innerHTML = html;
}