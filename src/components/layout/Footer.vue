<template>
    <footer id="footer" ref="footer">
        <div class="footer__nav">
            <router-link to="/aboutus">회사소개</router-link>
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
            <a href="http://www.naver.com" target="_blank">사업자정보확인</a>
            <router-link to="/notice">공지사항</router-link>
        </div>
        <div class="footer__info">
            <p>회사명 : (주)스타쉽엔터테인먼트 <span>대표 : 이훈희, 이진성</span></p>
            <p>사업자등록번호 : 114-86-65214 <span>통신판매업신고 : 제 2017-서울강남-00780호</span></p>
            <p>주소 : 서울시 강남구 삼성로146길 4-5 스타쉽ENT (06070)</p>
            <p>전화번호 : 070-5158-9176 <span>이메일 : starshipsquare@gmail.com</span></p>
            <p>개인정보책임자 서승연 / starshipsquare@gmail.com</p>
            <p>호스팅제공자 (주)코리아센터(메이크샵)</p>
            <p>Copyright STARSHIP ENTERTAINMENT. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
    export default {
         mounted(){
            console.log("푸터높이 : ", this.$refs.footer.offsetHeight)
            console.log("브라우저상단에서부터 거리값 : ", this.$refs.footer.offsetTop)
        },
    }
</script>

<style lang="scss" scoped>
    #footer {
        background:#000; color:#fff;
        padding:50px; 
        .footer__nav {
            border-bottom:1px solid #fff; 
            padding-bottom:20px; 
            margin-bottom:20px; 
            a { margin-right:50px }
        }
        .footer__info {
            span { position:relative; margin-left:14px; 
                &::before {
                    content:""; position:absolute; top:5px; left:-10px;
                    width:1px; height:14px; background:#fff; 
                }
            }
        }
        @media screen and (max-width:768px) {
            padding:0px; 
            .footer__nav {
                border-bottom:0px solid #fff; 
                padding-bottom:0px; 
                margin-bottom:0px; 
                a { margin-right:0px; display:block;  
                    border:1px solid #fff;
                    border-top:none; 
                    padding:10px 20px; 
                }
            }
            .footer__info {
                padding:30px 20px; line-height:1.5em; 
                span { margin-left:0px; display:block; 
                    &::before { display:none; }
                }
            }
        }
    }
</style>