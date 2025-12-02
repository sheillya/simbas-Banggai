$(function(){
    
      // Mendapatkan elemen dropdown
      var jenisPertanyaanDropdown = document.getElementById('jenispertanyaan');

      // Mendapatkan elemen div untuk tampilan input date
      var dateInputDiv = document.createElement('div');
      dateInputDiv.className = 'input-group d-flex';
      
      //dateinput
      var dateInput = document.createElement('input');
      dateInput.type = 'text';
      dateInput.className = 'form-control mydatepicker';
      dateInput.placeholder = 'DD/MM/YYYY';
      dateInput.id = 'dateInput';

      var calendarIconSpan = document.createElement('span');
      calendarIconSpan.className = 'input-group-text';
      var calendarIcon = document.createElement('i');
      calendarIcon.className = 'ti ti-calendar fs-5';
      calendarIconSpan.appendChild(calendarIcon);

      // Menambahkan elemen input date dan ikon kalender ke dalam div
      dateInputDiv.appendChild(dateInput);
      dateInputDiv.appendChild(calendarIconSpan);

      // Mendapatkan elemen div untuk tampilan input dropdown
      var jawabanDropdownDiv = document.createElement('div');
      jawabanDropdownDiv.className = 'controls col-6';
      jawabanDropdownDiv.id = 'jawabandropdown';

      var jawabanDropdown = document.createElement('select');
      jawabanDropdown.className = 'form-select mr-sm-2';
      jawabanDropdown.id = 'jawabanDropdown';

      var jawabanOption1 = document.createElement('option');
      jawabanOption1.text = 'Jawaban 1';
      jawabanOption1.value = '0';
      jawabanDropdown.appendChild(jawabanOption1);

      var jawabanOption2 = document.createElement('option');
      jawabanOption2.text = 'Jawaban 2';
      jawabanOption2.value = '1';
      jawabanDropdown.appendChild(jawabanOption2);

      var jawabanOption3 = document.createElement('option');
      jawabanOption3.text = 'Jawaban 3';
      jawabanOption3.value = '2';
      jawabanDropdown.appendChild(jawabanOption3);

      jawabanDropdownDiv.appendChild(jawabanDropdown);

      // Mendapatkan elemen div untuk tampilan opsi pilihan
      var jawabanOpsiDiv = document.createElement('div');
      jawabanOpsiDiv.className = 'p-4';
      jawabanOpsiDiv.id = 'jawabanopsi';

      // Menambahkan opsi radio button ke dalam div
      var opsiLabels = ['Sangat Membantu', 'Cukup Membantu', 'Membantu', 'Tidak Membantu', 'Sangat Tidak Membantu'];

      for (var i = 0; i < opsiLabels.length; i++) {
          var radioDiv = document.createElement('div');
          radioDiv.className = 'form-check mb-3';
          
          var radioInput = document.createElement('input');
          radioInput.className = 'form-check-input';
          radioInput.type = 'radio';
          radioInput.name = 'exampleRadios';
          radioInput.id = 'exampleRadios' + (i + 1);
          radioInput.value = 'option' + (i + 1);
          
          var radioLabel = document.createElement('label');
          radioLabel.className = 'form-check-label';
          radioLabel.htmlFor = 'exampleRadios' + (i + 1);
          radioLabel.appendChild(document.createTextNode(opsiLabels[i]));
          
          radioDiv.appendChild(radioInput);
          radioDiv.appendChild(radioLabel);
          jawabanOpsiDiv.appendChild(radioDiv);
      }

      // Mendapatkan elemen div untuk tampilan checkbox
      var jawabanCheckboxDiv = document.createElement('div');
      jawabanCheckboxDiv.className = 'p-4';
      jawabanCheckboxDiv.id = 'jawabancheckbox';

      // Menambahkan checkbox ke dalam div
      var checkboxLabels = ['Sangat Membantu', 'Cukup Membantu', 'Membantu', 'Tidak Membantu', 'Sangat Tidak Membantu'];

      for (var i = 0; i < checkboxLabels.length; i++) {
          var checkboxDiv = document.createElement('div');
          checkboxDiv.className = 'form-check mb-3';
          
          var checkboxInput = document.createElement('input');
          checkboxInput.className = 'form-check-input';
          checkboxInput.type = 'checkbox';
          checkboxInput.name = 'exampleCheckboxes';
          checkboxInput.id = 'exampleCheckbox' + (i + 1);
          checkboxInput.value = 'option' + (i + 1);
          
          var checkboxLabel = document.createElement('label');
          checkboxLabel.className = 'form-check-label';
          checkboxLabel.htmlFor = 'exampleCheckbox' + (i + 1);
          checkboxLabel.appendChild(document.createTextNode(checkboxLabels[i]));
          
          checkboxDiv.appendChild(checkboxInput);
          checkboxDiv.appendChild(checkboxLabel);
          jawabanCheckboxDiv.appendChild(checkboxDiv);
      }

      // Mendapatkan elemen div untuk tampilan upload file
      var uploadFileDiv = document.createElement('div');
      uploadFileDiv.className = 'mt-3';

      var fileInput = document.createElement('input');
      fileInput.className = 'form-control';
      fileInput.type = 'file';
      fileInput.id = 'formFile';

      uploadFileDiv.appendChild(fileInput);

      // Mendeteksi perubahan pada dropdown
      jenisPertanyaanDropdown.addEventListener('change', function() {
        // Mendapatkan nilai jenis pertanyaan yang dipilih
        console.log('jalan')
        var selectedOptionValue = parseInt(jenisPertanyaanDropdown.value);

        // Mendapatkan elemen div dengan ID jenisjawaban
        var jenisJawabanDiv = document.getElementById('jenisjawaban');
        

         // Mengubah tampilan dalam div sesuai dengan jenis pertanyaan yang dipilih
        if (selectedOptionValue === 3) { // Jika pilihan adalah dropdown
          // Mengganti div dengan dropdown jawaban
          jenisJawabanDiv.innerHTML = ''; // Mengosongkan isi div
          jenisJawabanDiv.appendChild(jawabanDropdownDiv);
        } 
        
        else if (selectedOptionValue === 4) { // Jika pilihan adalah Opsi Pilihan
        // Mengganti div dengan opsi radio button
        jenisJawabanDiv.innerHTML = ''; // Mengosongkan isi div
        jenisJawabanDiv.appendChild(jawabanOpsiDiv);
       }
       // Mengubah tampilan dalam div sesuai dengan jenis pertanyaan yang dipilih
        else if (selectedOptionValue === 5) { // Jika pilihan adalah Pilihan Centang
            // Mengganti div dengan checkbox
            jenisJawabanDiv.innerHTML = ''; // Mengosongkan isi div
            jenisJawabanDiv.appendChild(jawabanCheckboxDiv);
        }

        // Mengubah tampilan dalam div sesuai dengan jenis pertanyaan yang dipilih
        else if (selectedOptionValue === 6) { // Jika pilihan adalah Upload File
            // Mengganti div dengan input file
            jenisJawabanDiv.innerHTML = ''; // Mengosongkan isi div
            jenisJawabanDiv.appendChild(uploadFileDiv);
        }
        // Mengubah tampilan dalam div sesuai dengan jenis pertanyaan yang dipilih
        else if  (selectedOptionValue === 10) { // Jika pilihan adalah Tanggal
          // Mengganti div dengan input date
          jenisJawabanDiv.innerHTML = ''; // Mengosongkan isi div
          jenisJawabanDiv.appendChild(dateInputDiv);
        } else {
          // Jika jenis pertanyaan bukan Tanggal, reset div ke tampilan asal
          jenisJawabanDiv.innerHTML = '<input type="text" name="maxChar" class="form-control" required data-validation-required-message="This field is required" maxlength="10" /><span class="fs-2">0/100</span>';
        }
      });
      
      function toggleDateInput() {
        var dateInput = document.getElementById("dateInput");
        var checkbox = document.getElementById("flexCheckDefault");

        if (checkbox.checked) {
          dateInput.disabled = true;
        } else {
          dateInput.disabled = false;
        }
      }
      // Date Picker
      jQuery(".mydatepicker, #datepicker, .input-group.date").datepicker();
      jQuery("#datepicker-autoclose").datepicker({
        autoclose: true,
        todayHighlight: true,
      });
      jQuery("#date-range").datepicker({
        toggleActive: true,
      });
      jQuery("#datepicker-inline").datepicker({
        todayHighlight: true,
      });

      document.querySelector('[data-repeater-create]').addEventListener('click', function(e) {
        e.preventDefault()
          // Mengambil elemen formulir asli
          var originalCard = document.getElementById('cardAsk-singkat');

          // Mengklon elemen formulir asli
          var clonedCard = originalCard.cloneNode(true);

          // Membersihkan nilai input di dalam formulir yang di-clone
          clonedCard.querySelector('#pertanyaan').value = '';
          clonedCard.querySelector('#flexSwitchCheckDefault').checked = false;

          // Menambahkan formulir yang di-clone ke dalam dokumen
          originalCard.parentNode.appendChild(clonedCard);
          });

      // Mendengarkan klik pada tombol "Trash"
      document.querySelector('[data-repeater-delete]').addEventListener('click', function(e) {
        // Mengambil elemen formulir yang ingin dihapus
        e.preventDefault()
        var cardToDelete = document.getElementById('cardAsk-singkat');
        
        // Menghapus elemen formulir dari parent node (menghapus dari dokumen)
        cardToDelete.parentNode.removeChild(cardToDelete);
      });

      $(function () {
        dragula([document.getElementById("draggable-area")]),
          dragula([document.getElementById("card-colors")])
            .on("drag", function (e) {
              e.className = e.className.replace("card-moved", "");
            })
            .on("drop", function (e) {
              e.className += " card-moved";
            })
            .on("over", function (e, t) {
              t.className += " card-over";
            })
            .on("out", function (e, t) {
              t.className = t.className.replace("card-over", "");
            }),
          dragula(
            [
              document.getElementById("copy-left"),
              document.getElementById("copy-right"),
            ],
            {
              copy: !0,
            }
          ),
          dragula(
            [
              document.getElementById("left-handles"),
              document.getElementById("right-handles"),
            ],
            {
              moves: function (e, t, n) {
                return n.classList.contains("handle");
              },
            }
          ),
          dragula(
            [
              document.getElementById("left-titleHandles"),
              document.getElementById("right-titleHandles"),
            ],
            {
              moves: function (e, t, n) {
                return n.classList.contains("titleArea");
              },
            }
          );
      });

      // Mendapatkan elemen input dengan ID idlabel
      var inputLabel = document.getElementById('idlabel');

      // Mendapatkan elemen input dengan ID idlabel
      var inputLabel = document.getElementById('idlabel');

      // Mendapatkan elemen div untuk tampilan opsi pilihan
      var jawabanOpsiDiv = document.getElementById('jawabanopsi');

      // Mendengarkan peristiwa penekanan tombol "Enter"
          inputLabel.addEventListener('keydown', function(event) {
          // Jika tombol Enter ditekan (kode tombol 13)
          if (event.keyCode === 13) {
              // Mengambil nilai dari input label
              var labelValue = inputLabel.value;

              // Membuat elemen radio button baru
              var radioDiv = document.createElement('div');
              radioDiv.className = 'form-check mb-3';

              var radioInput = document.createElement('input');
              radioInput.className = 'form-check-input';
              radioInput.type = 'radio';
              radioInput.name = 'exampleRadios';
              radioInput.id = 'exampleRadio' + (jawabanOpsiDiv.children.length + 1);
              radioInput.value = labelValue;

              var radioLabel = document.createElement('label');
              radioLabel.className = 'form-check-label';
              radioLabel.htmlFor = 'exampleRadio' + (jawabanOpsiDiv.children.length + 1);
              radioLabel.appendChild(document.createTextNode(labelValue));

              radioDiv.appendChild(radioInput);
              radioDiv.appendChild(radioLabel);

              // Menambahkan elemen radio button ke dalam div
              jawabanOpsiDiv.insertBefore(radioDiv, inputLabel.parentNode);

              // Mengosongkan nilai input label setelah membuat radio button baru
              inputLabel.value = '';

              // Mencegah perilaku bawaan dari tombol Enter (form submission)
              event.preventDefault();
            }
          });
})