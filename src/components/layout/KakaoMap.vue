<template>
    <div class="map_wrap">
        <div id="map" ref="mapRef" style="width:100%; height:100%; overflow:hidden;"></div>
        <div id="menu_wrap" class="bg_white">
            <div class="option">
                <div>
                    <form @submit.prevent="searchPlaces">
                        <input type="search" v-model="keyword" id="keyword"> 
                        <button type="submit">검색</button> 
                    </form>
                </div>
            </div>
            <ul id="placesList">
                <li v-for="(item, index) in places" :key="index" @mouseover="displayInfowindow(markers[index], item.place_name)" @mouseout="infowindow.close()">
                    {{ item.place_name }}
                </li>
            </ul>
            <div id="pagination" ref="pageRef">
                <a href="#" v-for="(num) in pagination.last" :key="num" :class="{on : num==pagination.current }" @click.prevent="pagination.gotoPage(num)">
                    <span>{{ num }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
let kakao = window.kakao;
export default {
  name: "KakaoMap",
  props:["keyword"],
  data() {
    return {
      markers: [],
      map: null,
      places : [],
      mapOption : {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
      },  
      pagination : {},
      infowindow : null,
    };
  },
  mounted(){
     let mapContainer = this.$refs.mapRef;
     this.map = new kakao.maps.Map(mapContainer, this.mapOption);
     this.infowindow = new kakao.maps.InfoWindow({zIndex:1});
     this.searchPlaces()
  },
  methods: {
    searchPlaces() {
        if (!this.keyword) {
            alert("키워드를 입력해주세요!!")
            return false;
        }
        let ps = new kakao.maps.services.Places();
        ps.keywordSearch( this.keyword, (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            console.log(data)
            this.places = data
            this.displayPlaces(data);
            console.log(pagination)
            // 페이지 번호를 표출합니다
            this.pagination = pagination
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert('검색 결과가 존재하지 않습니다.');
            return;
        } else if (status === kakao.maps.services.Status.ERROR) {
            alert('검색 결과 중 오류가 발생했습니다.');
            return;
        }
        }); 
    },
    displayPlaces(places){
        this.removeMarker();
        let bounds = new kakao.maps.LatLngBounds()
        for (let i in places) {
            let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
            let marker = this.addMarker(placePosition, i)
            bounds.extend(placePosition);
            (function(marker, title, that) {
                kakao.maps.event.addListener(marker, 'mouseover', function() {
                    that.displayInfowindow(marker, title);
                });
                kakao.maps.event.addListener(marker, 'mouseout', function() {
                    that.infowindow.close();
                });
            })(marker, places[i].place_name, this);
        }
        this.map.setBounds(bounds);
    },
    addMarker(position, idx) {
        let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', 
        imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });

        marker.setMap(this.map); // 지도 위에 마커를 표출합니다
        this.markers.push(marker);  // 배열에 생성된 마커를 추가합니다
        return marker;
    },
    removeMarker() {
        for ( let i in this.markers ) {
            this.markers[i].setMap(null);
        }   
        this.markers = [];
    },
    displayInfowindow(marker, title) {
        let content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
        this.infowindow.setContent(content);
        this.infowindow.open(this.map, marker);
    },
  }
}
</script>

<style lang="scss" scoped>
    .map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif; font-size:14px;}
    .map_wrap {position:relative; width:100%; height:500px;}
    #menu_wrap {position:absolute;top:0;left:0;bottom:0;
        width:250px;
        margin:10px 0 30px 10px;
        padding:10px;
        overflow-y:auto;
        background:rgba(255, 255, 255, 1);
        z-index: 1;
        border-radius: 10px;
        .option { border-bottom:1px solid #000; padding-bottom:10px; 
            div {
                form {
                    display:flex; 
                    input { flex:1; padding-left:0.5em; height:25px;  }
                    button { font-size:12px; width:35px; height:25px; margin-left:5px}
                }
            }
        }
        #placesList {
            margin-top:10px; 
            li {
                position:relative; overflow: hidden; cursor: pointer;
                line-height:1.5em;
                &:hover { color:#f00; }
            }
        }
        #pagination {
            margin-top:20px; text-align:center; 
            a { padding:2px 5px; background:#ddd; margin:0 3px; border-radius:3px;
                &.on { background:#333; color:#fff }
            }
        }
    }

</style>