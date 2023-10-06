function ThanhToan() {
    return ( <
        >
        <
        div class = "table-responsive" >
        <
        table class = "table table-striped table-sm" >
        <
        thead >
        <
        tr >
        <
        th > Sản Phẩm < /th> <
        th > Đơn Giá < /th> <
        th > Hình ảnh < /th> <
        th > Số Lượng < /th> <
        th > Thành Tiền < /th> <
        th > < /th>

        <
        /tr> <
        /thead> <
        tboby >
        <
        tr >
        <
        td > Tên Sản Phẩm < /td> <
        td > 100.000 < /td> <
        td > < img src = "download (1).jpg" > < /img></td >
        <
        td > 1 < /td> <
        td > 200.000 < /td> <
        td > < a href = "#" > xóa < /a>| <a href="#">Cập Nhật</a >
        <
        /td> <
        /tr> <
        /tboby>

        <
        tfoot >
        <
        button type = "button"
        class = "btn btn-warning" > Tiếp Tục Mua Hàng < /button> <
        button type = "button"
        class = "btn btn-warning" > Thanh Toán < /button> <
        div class = "thongtin" > Thông Tin Người Nhận <
        tr > Họ Tên: < input class = "text" > < /input></tr >
        <
        tr > Điện Thoại: < input class = "text" > < /input></tr >
        <
        tr > Địa Chỉ: < input class = "text" > < /input></tr >
        <
        /div> <
        /tfoot>




        <
        /table> <
        /div> <
        />
    );
}
export default ThanhToan;