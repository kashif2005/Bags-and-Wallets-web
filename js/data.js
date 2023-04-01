var data = [{
    id: 1001,
    product: "Uncle.Y Leather Handbags For Women",
    pro_dec: "Uncle.Y offers the best women’s leather handbags that are roomy and made of high-quality PU leather. The bag opens to a large zippered compartment that features 2 slip pockets for phones and keys with a side zippered pocket for your cash or wallets. Not only is the material soft to the touch, you can wear this bag 2 ways with the smaller adjustable leather straps or attach a large one during rush hour. 6 neutral colors are available, all of which can be a fantastic addition to your bag collection.",
    brand: "Titan",
    price: "Rs. 21,400",
    img: "louis.1.jpg"
}, {
    id: 1002,
    product: "Brand Leather Handbags",
    pro_dec: "Leather Bag Handbags Brand Leather Handbags Ladies Tote Hand Bags Female Designer Shoulder bags, solid bag, Leather women Shoulder Bag famous Designer handbags, Genuine Leather",
    brand: "Gucci",
    price: "Rs. 20,000",
    img: "louis.2.jpg"
}, {
    id: 1003,
    product: "Kattee Women's Genuine Leather Handbags",
    pro_dec: "Kattee offers some of the best designer leather handbags made of waxed cowhide and accentuated with copper hardware. The bottom of this durable material retains shape owing to the 4 metal rivets that also protect it from abrasion. In the interior, 2 main compartments have a divider and you will find 2 zippered and slip pockets to store your belongings. With buckles that allow for adjustment, you can also avail the removable strap to transform this lightweight leather bag’s style.",
    brand: "Louis ",
    price: "Rs. 15,999",
    img: "gucci.5.jpg"
}, {
    id: 1004,
    product: "Cross Body purse",
    pro_dec: "ur Genuine Leather Cross Body Purse is smooth, silky, flexible, and lavish. This leather handbag has a ton of capabilities with its internal pockets and compartments. The cross body purse is made of soft leather with 1 front pocket, which offers quick access to your cell phone and other frequently-needed things, and comes with 3 internal pockets to help you organize everything you need. Our line of genuine leather cross body bags is led by this beautiful bag.",
    price: "Rs. 25,000",
    brand: "Gucci",
    img: "tommy.2.jpg"
}, {
    id: 1005,
    product: "A Frye zip tote",
    pro_dec: "A Frye zip tote that's a no-brainer because... well, it's from Frye — one of the best leather brands out there.",
    brand: "puma",
    price: "Rs. 18,000",
    img: "new.3.jpg"

}, {
    id: 1006,
    product: "Mirelle Genuine Leather Framed Tote Handbag - Small",
    pro_dec: "Made from soft, genuine leather this shopper has an outer zipped pocket for your cellphone or keys. This bag has the most comfortable and perfect length shoulder straps, 2 inner pockets (1 zipped), a zip closure, and a large inner compartment to hold everything that you need.",
    brand: "Mirelle",
    price: "Rs. 10,000",
    img: "tommy.4.jpg"
}, {
    id: 1007,
    product: "Green colored shoulder bag",
    pro_dec: "Leather material green colored shoulder bag centimeters height x 25 centimeters length x 16 centimeters width1 year manufacturer warranty",
    brand: "LIZARD EMERALD",
    price: "Rs. 22,999",
    img: "louis.6.jpg"
}, {
    id: 1008,
    product: "Patricia Nash Voletta Leather Top Zip Crossbody Bag",
    pro_dec: "Product is made from 100% leather designed with premium materials and manufactured/sewn in China.Includes card to warranty/register your purchase.",
    brand: "HSN",
    price: "Rs. 20,000",
    img: "tommy.3.jpg"
}, {
    id: 1009,
    product: "The SakSilverlake Crossbody",
    pro_dec: "I was looking at this bag tor a month. I loved it very much on the pictures. I've got black one. Overall it's decent bag, leather isn't that soft like I thought, but it's really okay. ",
    price: "Rs. 17,000",
    img: "louis.2.jpg"
}, {
    id: 1010,
    product: "Wallet woman genuine leather",
    pro_dec: "Wallet men genuine leather small wallet thin purse mini card holders male clutch mini wallet practical top quality guarantee !!",
    brand: "DKER",
    price: "Rs. 29,000",
    img: "gucci.3.jpg"
},{
    id: 10011,
    product: "Chicken Leather Wallet",
    pro_dec: "Women’s Chicken Skin Leather Wallet, Trifold Medium size with Zip-around Coin Purse The outside of these wallets are made from Handmade Exotic Chicken Skin leather. The inside is from cowhide.",
    brand: "Louis ",
    price: "Rs. 15,999",
    img: "new.6.png"
},{
    id: 1012,
    product: "Wallet Double Zip-Around",
    pro_dec: "Owing to the 4 metal rivets that also protect it from abrasion. In the interior, 2 main compartments have a divider and you will find 2 zippered and slip pockets to store your belongings. With buckles that allow for adjustment, you can also avail the removable strap to transform this lightweight leather bag’s style.",
    brand: "Louis ",
    price: "Rs. 17,999",
    img: "new.7.png"

}]




var option = document.getElementById("product-1");
var option1 = document.getElementById("product-2");



function data1() {
    if (option.value != option1.value) {
        for (var i = 0; i < data.length; i++) {
            if (option.value == i) {
                document.getElementById("compare-img-1").src = "images/"+data[i].img;
                document.getElementById("produt_name").innerHTML = data[i].product;
                document.getElementById("product_desc").innerHTML = data[i].pro_dec;
                document.getElementById("price").innerHTML = data[i].price;
                document.getElementById("category").innerHTML = data[i].brand;
            }
        }
    }
    else {
        alert("Can't Compare this product");
    }
}


function data2() {
    if (option.value != option1.value) {
        for (var ia = 0; ia < data.length; ia++) {
            if (option1.value == ia) {
                document.getElementById("compare-img-2").src = "images/"+data[ia].img;
                document.getElementById("produt_name-1").innerHTML = data[ia].product;
                document.getElementById("product_desc-1").innerHTML = data[ia].pro_dec;
                document.getElementById("price-1").innerHTML = data[ia].price;
                document.getElementById("category-1").innerHTML = data[ia].brand;
            }
        }
    }
    else {
        alert("Can't Compare this product");
    }
}
