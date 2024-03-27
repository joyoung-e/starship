<template>
    <div class="detailBox">
        <h2>{{ product.title }}</h2>
        <div class="content">
            <div class="photo">
                <img :src="product.image" :alt="product.title">
            </div>
            <div class="info">
                <p>이 상품의 아이디는 {{ product.id }}</p>
                <p>카테고리 : {{ product.category }}</p>
                <p>가격 : {{ product.price }}</p>
                <p>요약설명 : <span v-html="product.description"></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                product : { }
            }
        },
        created(){
            this.product = this.$store.getters.fnGetProducts.find(item=>item.id == this.$route.params.id)
            // this.product.image = '/' + this.product.image
            this.product.image = '/image/' + this.product.image
        }
    }
</script>

<style lang="scss" scoped>
    .detailBox {
        h2 { text-align:center; font-size:30px; margin:20px 0 }
        .content {
            display:flex; 
            .photo { width:300px; margin-right:50px;  }
            .info { flex:1 }
        }
        
    }
</style>