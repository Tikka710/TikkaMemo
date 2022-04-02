<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

const noteList = ref([])

const onClickNoteAdd = () => {
    noteList.value.push({
        id : new Date().getTime().toString(16),
        name : `新規ノート`,
    })
}

</script>

<template>
    <div>
        
        <div class="wrapper flex">
            <section class="left-menu">
                <p>レフトメニュー</p>
                <!-- ノート追加ボタン -->
                <div class="add_note flex items-center flex-shrink-0 mr-6">
                    <button class="transparent" @click="onClickNoteAdd">
                    <svg class="add_icon fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 9.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6.66667V3.33333H3.33333V12.6667H12.6667V9.33333H14Z" fill="#1F2A37"/>
                        <path d="M14 4.66667H11.3333V2H9.99998V4.66667H7.33331V6H9.99998V8.66667H11.3333V6H14V4.66667Z" fill="#1F2A37"/>
                    </svg>
                    <span>ノートを追加</span>
                </button>
                </div>
                
            </section>
            <section class="main-menu">
                <p>メインだよ</p>

            </section>

        </div>

    </div>
</template>



<style scoped lang="scss">
    .wrapper{
        display: flex;
        height: calc(100vh - 60px);
        width: 100%;
        @media screen and (min-width: 640px){
            min-height: 640px;
        }
        .left-menu{
            width: 350px;
            flex-direction: row;
            align-items: center;
            padding: 19px 13px;
            background: #F4F5F5;

            .add_note{
                left: 13px;
                top: 137px;
                /* Inside auto layout */
                flex: none;
                order: 4;
                flex-grow: 0;
                margin: 13px 0px;
            }
            .add_icon{
                left: 0px;
                top: 0px;
                /* Inside auto layout */
                flex: none;
                order: 0;
                flex-grow: 0;
                margin: 0px 0px;
            }
        }
        
        .main-menu{
            flex-grow: 1;
            padding: 10px;
        }
        
    }


</style>
