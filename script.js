document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ 'a' (nhảy trang)

        const targetId = this.getAttribute('href').substring(1); // Lấy ID của phần muốn cuộn đến
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Cuộn đến vị trí của phần tử, trừ đi chiều cao header
                behavior: 'smooth' // Hiệu ứng cuộn mượt
            });
        }
    });
});

// Bạn có thể thêm các hiệu ứng JS khác ở đây nếu muốn
// Ví dụ: Animation khi scroll, form liên hệ AJAX, v.v.