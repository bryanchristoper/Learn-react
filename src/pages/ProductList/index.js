import React from 'react'

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      showHasRating: false,
      products: [
        {
          name: 'Buku Tulis Shincan',
          price: 50000,
          discount: 24,
          image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2017/12/19/28464820/28464820_282d5b9a-1b61-4bd1-a043-9bee6710c90b_520_390.jpg',
          rating: 3.7,
          seller: 'Toko Serba Ada',
          location: 'Jakarta',
        },
        {
          name: 'Buku Menggambar',
          price: 20000,
          discount: 12,
          image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2016/12/22/1119440/1119440_f64ab84b-21a5-42e4-a741-3539acdc6362.jpg',
          rating: 4.2,
          seller: 'Toko Hari',
          location: 'Depok',
        },
        {
          name: 'Sepeda Jokowi',
          price: 2000000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/1/16/2879987/2879987_f76b676f-353c-4cac-944b-4f367eb8af1b_2048_2048.jpg',
          rating: 0,
          seller: 'BEST POLYGON',
          location: 'Jakarta',
        },
        {
          name: 'Sepeda Jokowi',
          price: 2000000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/1/16/2879987/2879987_f76b676f-353c-4cac-944b-4f367eb8af1b_2048_2048.jpg',
          rating: 5,
          seller: 'BEST POLYGON',
          location: 'Jakarta',
        },
        {
          name: 'Sepeda Jokowi',
          price: 2000000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/1/16/2879987/2879987_f76b676f-353c-4cac-944b-4f367eb8af1b_2048_2048.jpg',
          rating: 0,
          seller: 'BEST POLYGON',
          location: 'Jakarta',
        },
      ]
    };
  }

  showDiscountCoret = (price, discount) => {
    if (discount > 0) {
      return <del style={{ color: 'red' }}>{price}</del>
    } else {
      return null;
    }
  }

  drawStar = (rating) => {
    // ngubah angka desimal ke bilangan bulat 
    const ratingNumber = Math.floor(rating);

    // penampung jsx of stars
    const stars = [];

    // looping buat nambahin bintang
    for (let i = 0; i < ratingNumber; i++) {
      stars.push(<img width="15" src="https://image.flaticon.com/icons/svg/148/148841.svg" />)
    }

    return stars;
  }

  onKeywordChange = e => {
    this.setState({ keyword: e.target.value })
  }

  render() {
    const { products } = this.state;

    const productsWithRating = products.filter(product => {
      if (this.state.showHasRating === false) {
        return true;
      } else {
        if (product.rating > 0) {
          return true;
        }
        else {
          return false;
        }
      }
    });

    const filteredProducts = productsWithRating.filter(product => {
      if (product.name.toLowerCase().includes(this.state.keyword.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <div class="container" style={{ paddingTop: 20 }}>

        <div className="row" style={{ marginBottom: 20 }}>
          <div className="input-group col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Search here..."
              value={this.state.keyword}
              onChange={this.onKeywordChange}
            />
          </div>
          <div className="input-group col-md-12">
            <div class="checkbox">
              <label>
                <input type="checkbox" checked={this.state.showHasRating} onChange={e => this.setState({ showHasRating: e.target.checked })} />
                Show products with rating only
              </label>
            </div>
          </div>
        </div>

        <div className="row">

          {filteredProducts.map(product => {
            return (
              <div className="col-md-4 col-xs-12">
                <div className="card" style={{ marginBottom: 20 }}>
                  <img src={product.image} class="card-img-top" alt="product" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text" style={{ marginBottom: 0 }}>
                      <span>Rp {product.price - product.discount / 100 * product.price}</span>
                      {/* {this.showDiscountCoret(product.price, product.discount)} */}
                      {product.discount > 0 && <del style={{ color: 'red', fontSize: '14px', marginLeft: '5px' }}>Rp {product.price}</del>}
                    </p>
                    <div style={{ height: '24px', marginBottom: '10px' }}>
                      {product.rating > 0
                        ?
                        this.drawStar(product.rating)
                        :
                        <i style={{ fontSize: '12px' }}>belum ada rating</i>
                      }
                    </div>
                    <b className="card-text">{product.seller}</b>
                    <div className="card-text">{product.location}</div>
                  </div>

                </div>
              </div>
            )
          })}

        </div>
        <div className="row">
          copyright 2018
        </div>
      </div>
    );
  }
}

export default ProductList;
