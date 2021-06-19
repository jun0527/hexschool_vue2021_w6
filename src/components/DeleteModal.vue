<template>
  <div class="modal fade" ref="deleteModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white">刪除確認</h5>
        <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
      </div>
      <div class="modal-body">
        <p v-if="deleteStatus === 'deleteOne'">確定要刪除購物車中{{deleteCart.product.title}}？</p>
        <p v-else>確定要清空購物車？</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeModal">取消</button>
        <button type="button" class="btn btn-danger"
        v-if="deleteStatus === 'deleteOne'" @click="deleteOne">刪除</button>
        <button type="button" class="btn btn-danger" v-else @click="deleteAll">清空購物車</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import swal from 'sweetalert';
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      deleteModal: {},
      deleteStatus: '',
      deleteCart: [],
    };
  },
  methods: {
    openModal() {
      this.deleteModal.show();
    },
    closeModal() {
      this.deleteStatus = '';
      this.deleteCart = [];
      this.deleteModal.hide();
    },
    deleteOne() {
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${this.deleteCart.id}`;
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            swal(`成功刪除購物車中${this.deleteCart.product.title}！`);
            this.$emit('getCartData');
            this.closeModal();
          } else {
            swal('購物車刪除失敗！');
            this.closeModal();
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteAll() {
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            swal('清空購物車成功！');
            this.$emit('getCartData');
            this.closeModal();
          } else {
            swal('清空購物車失敗！');
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.deleteModal = new Modal(this.$refs.deleteModal, { backdrop: 'static', keyboard: false });
  },
};
</script>
