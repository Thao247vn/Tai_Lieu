var showDuration=2000;// thời gian hiển thị 1 hình (ms)
var transitionDuration=1000;// thời gian chạy hiệu ứng chuyển hình (ms)
var slideshow=document.querySelector('#slideshow');
var slides=document.querySelectorAll('#slideshow .slide');
var numOfSlide=slides.length;
var current=0;
var next=1;
slides[current].classList.add('current');
/* Cách thêm class cho 1 thẻ trong JS */
slideshow.style.transitionDuration=transitionDuration+'ms';
/* Cách thay đổi inline CSS của 1 thẻ trong JS, lưu ý cách ghi tên thuộc tính CSS */
function changeSlide(){
	slides[next].classList.add('next');
	slides[current].classList.remove('current');
	slides[current].classList.add('prev');
	/* Thêm class next để tạo hiệu ứng */
	/* Hẹn thời gian xử lý sau khi kết thúc hiệu ứng thì đưa current cũ ra ngoài và chuyển next thành current mới */
	setTimeout(function(){
		slides[current].classList.remove('prev');
		/* Cách bỏ class cho 1 thẻ trong JS */
		slides[next].classList.remove('next');
		slides[next].classList.add('current');
		current=next;
		next=(next+1)%numOfSlide;
	},transitionDuration);
}
setInterval(changeSlide,showDuration);//hẹn thời gian lặp lại việc chuyển slide


/* 
	Lưu ý cú pháp hàm setTimeout và setInterval:
	(<hàm cần hẹn giờ thực hiện>, <thời gian hẹn (ms)> [, <danh sách tham số cần truyền cho hàm (nếu có)>])	
	VD:
	for(var i=0;i<5;i++){
		setTimeout(console.log,i*1000,i);
		// hàm ─────────────┘   │     │
		// thời gian hẹn ───────┘     │
		// tham số cho hàm ───────────┘
	}
	
	Mỗi hàm setTimout và setInterval sẽ trả về một mã số, có thể dùng mã số này để hủy hẹn bằng hàm clearTimout hoặc clearInterval
	VD:
	var intervalID=setInterval(function(){
		console.log(new Date());
	},1000);
	//khi nào muốn hủy hẹn hàm setInterval trên thì dùng hàm clearInterval như sau:
	clearInterval(intervalID);
	*/