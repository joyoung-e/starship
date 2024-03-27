import dayjs from 'dayjs'
export default {
    state : {
        boardType : "notice",
        noticeList : [
            { id:2, subject:"공지사항2", writer:"joyoung_e@naver.com", date:"2024-03-24", content:"공지사항 내용2", hit:0},
            { id:1, subject:"공지사항1", writer:"joyoung_e@naver.com", date:"2024-03-24", content:"공지사항 내용1", hit:0}
        ], // { id:연번호, subject:제목, writer:작성자, date:날짜, content:내용, hit:0}
        reviewList : [
            { id:2, subject:"리뷰2", writer:"joyoung_e@naver.com", date:"2024-03-24", content:"리뷰 내용2", hit:0},
            { id:1, subject:"리뷰1", writer:"joyoung_e@naver.com", date:"2024-03-24", content:"리뷰 내용1", hit:0}
        ],
    },
    mutations : {
        change__Type(state, payload){
            state.boardType = payload
        },
        on__Insert(state, payload){
            let {writer, subject, content, type } = payload
            let date = dayjs().format("YYYY-MM-DD")
            if (type=='notice') {
                let id;
                if (!state.noticeList.length){
                    id = 0
                } else {
                    id = state.noticeList[0].id
                }
                state.noticeList.unshift({id:++id, subject, writer, content, date, hit:0 })
            } else if (type=='review') {
                let id;
                if (!state.reviewList.length){
                    id = 0
                } else {
                    id = state.reviewList[0].id
                }
                state.reviewList.unshift({id:++id, subject, writer, content, date, hit:0 })
            }
        },
        hit__Update(state, payload){
            if (state.boardType=='notice') {
                state.noticeList.map(item=>{
                    if (item.id==payload) {
                        console.log(item.id, item.hit)
                        item.hit = item.hit+1
                    }
                })
            } else {
                state.reviewList.map(item=>{
                    if (item.id==payload) {
                        console.log(item.id, item.hit)
                        item.hit = item.hit+1
                    }
                })
            }
        },
        on__Update(state, payload){
            let { id, subject, content } = payload
            if (state.boardType=='notice'){
                state.noticeList.map(item=>{
                    if (item.id==id) {
                        item.subject = subject
                        item.content = content
                    }
                })
            } else {
                state.reviewList.map(item=>{
                    if (item.id==id) {
                        item.subject = subject
                        item.content = content
                    }
                })
            }
        },
        on__Remove(state, payload){
            if (state.boardType=='notice') {
                state.noticeList = state.noticeList.filter(item=>item.id !== payload)
            } else {
                state.reviewList = state.reviewList.filter(item=>item.id !== payload)
            }
        },
        memberPostRemove(state, payload){
            if (state.noticeList.length){
                state.noticeList = state.noticeList.filter(item=>item.writer!==payload)
            }
            if (state.reviewList.length){
                state.reviewList = state.reviewList.filter(item=>item.writer!==payload)
            }
        },
    },
    actions : { },
    getters : {
        fnGetBoardType : state => state.boardType,
        fnGetNoticeList : state => state.noticeList,
        fnGetReviewList : state => state.reviewList
    }
}