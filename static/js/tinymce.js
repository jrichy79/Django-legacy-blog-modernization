document.addEventListener("DOMContentLoaded", function (event) {
  console.log("id : id_body");
  let script = document.createElement('script');
  script.setAttribute('src', '/static/js/tinymce/tinymce.min.js');
  script.setAttribute('referrerpolicy', 'origin');
  document.head.appendChild(script);

  script.onload = () => {
    tinymce.init({
      base_url: '/static/js/tinymce',
      suffix: '.min',
      selector: '#id_body',
      plugins: 'preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help quickbars emoticons',
      menubar: 'file edit view insert format tools table help',
      toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen preview save | image media template link anchor codesample | ltr rtl',
      autosave_ask_before_unload: true,
      autosave_interval: '30s',
      autosave_prefix: '{path}{query}-{id}-',
      autosave_restore_when_empty: false,
      autosave_retention: '2m',
      image_advtab: true,
      automatic_uploads: false,
      importcss_append: true,
      height: 600,
      image_caption: true,
      quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
      toolbar_mode: 'sliding',
      contextmenu: 'link image table',
      a11y_advanced_options: true,
      init_instance_callback: function (editor) {
        editor.dom.addClass(editor.dom.select('img'), 'img-fluid');
      }
    });
  }
});