<form id="myForm">
  <input type="file" id="csvFile" accept=".csv" />
  <br />
  <input type="submit" value="Submit" />
</form>
<script>
      const myForm = document.getElementById("myForm");
      const csvFile = document.getElementById("csvFile");
      myForm.addEventListener("submit", function (e) {
         e.preventDefault();
         const input = csvFile.files[0];
         const reader = new FileReader();
         reader.onload = function (e) {
            const text = e.target.result;
            //document.write(text);
            csvToJSON(text);
         };
         //reader.readAsText(input);
      });
        function csvToJSON(csv_string){
            const rows = csv_string.split("\r\n");
            const jsonArray = [];
            const header = rows[0].split(",");
            let obj = {};
            let array = [];
            for(let i = 1; i < rows.length; i++){
                let row = rows[i].split(",");
                for(let j = 0; j < header.length; j++){
                    var datas = row[i].split(",");
                    obj[header[j]] = row[i].split(",");
                }
                jsonArray.push(obj);
            }
            return jsonArray;
        }
   </script>
