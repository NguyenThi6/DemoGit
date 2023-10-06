function GioHang(){
    return(
        <>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                    <thead>
                <tr>
                    <th> Sản Phẩm</th>
                    <th>Đơn Giá </th>
                    <th> Số Lượng</th>
                    <th> Thành Tiền</th>
                    <th></th>

                </tr>
                    </thead>
                <tboby>
                    <tr>
                        <td> Tên Sản Phẩm</td>
                        <td>100.000</td>
                        <td>1</td>
                        <td>200.000</td>
                        <td> <a href="#">xóa</a> | <a href="#">Cập Nhật</a>
                        </td>
                    </tr>
                </tboby>
                <tfoot>
                    <button type="button" class="btn btn-warning">
                    Tiếp Tục Mua Hàng
                    </button>
                    <button type="button" class="btn btn-warning">
                    Thanh Toán
                    </button>
                </tfoot>
            <div class="abc">
            <tr>
                    <th> Sản Phẩm</th>
                    <th>Đơn Giá </th>
                    <th> Số Lượng</th>
                    <th> Thành Tiền</th>
                    <th></th>

                </tr>

            </div>
                
         </table>
        </div>
        </>
    );
}
export default GioHang;