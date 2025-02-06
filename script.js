function getAnswer() {
    const question = document.getElementById("question").value.trim().toLowerCase();
    const responseElement = document.getElementById("response");
    const ballElement = document.querySelector(".ball");

    // Ekranı temizleme
    responseElement.innerHTML = "";

    // Eğer soru boşsa, uyarı göster ve işleme devam etme
    if (question === "") {
        alert("Lütfen bir renk adı yazın!");
        return;
    }

    // Rastgele renk seçimi
    const randomColor = getRandomColor();
    ballElement.style.backgroundColor = randomColor;

    // Topun rengini ve adını bulma
    const colorName = getColorName(randomColor);

    // Eğer kullanıcı girilen renk ile topun rengini eşleşiyorsa
    let matchResult = "Hayır";
    if (question === colorName.toLowerCase()) {
        matchResult = "Evet";
    }

    // Rastgele cevap seçme (Evet, Hayır vb.)
    const randomResponse = getRandomResponse();

    // Topun rengini, eşleşme durumunu ve cevabı içeren mesaj
    responseElement.innerHTML = `
      <p><strong>Cevap:</strong> ${randomResponse}</p>
      <p><strong>Topun Rengi:</strong> ${colorName}</p>
    `;

    // Text input (soru alanını) temizleme
    document.getElementById("question").value = "";
}

// Renk kodunu renk adına çeviren fonksiyon
function getColorName(hex) {
    const colorNames = {
        "#FF0000": "Kırmızı",
        "#00FF00": "Yeşil",
        "#0000FF": "Mavi",
        "#FFFF00": "Sarı",
        "#FF00FF": "Mor",
        "#FFFFFF": "Beyaz",
        "#000000": "Siyah",
        "#808080": "Gri",
        "#A52A2A": "Kahverengi"
    };

    return colorNames[hex] || "Bilinmiyor";
}

function getRandomColor() {
    const colors = [
        "#FF0000", // Kırmızı
        "#00FF00", // Yeşil
        "#0000FF", // Mavi
        "#FFFF00", // Sarı
        "#FF00FF", // Mor
        "#FFFFFF", // Beyaz
        "#000000", // Siyah
        "#808080", // Gri
        "#A52A2A", // Kahverengi
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function getRandomResponse() {
    const responses = [
        "Evet",
        "Hayır",
        "Belki",
        "Kesinlikle",
        "Hayır, tekrar sor",
        "Evet, ama biraz daha zaman alacak",
        "Muhtemelen",
        "Bunu bilemem",
        "Kesinlikle hayır",
        "Evet, yapabilirsin",
        "Sana güveniyorum, ama...",
        "Bunu yapmak için uygun zaman değil",
        "Evet, ama dikkatli ol",
        "Belki, ama biraz bekle",
        "Hayır, bu senin için iyi değil",
        "Evet, tamamen mümkün",
        "Belki, ama başka bir yol var",
        "Evet, zor bir şey değil",
        "Hayır, başka bir çözüm bulmalısın",
        "Evet, ama önce biraz düşün",
        "Kesinlikle evet",
        "Hayır, hiç bekleme",
        "Evet, ama temkinli ol",
        "Hayır, ama başka bir şey dene",
        "Belki, ama zamanla değişebilir",
        "Evet, ama dikkatli olmalısın",
        "Hayır, ama bir fikrim var",
        "Belki, ama dikkat etmelisin",
        "Evet, ama önce biraz daha düşün",
        "Hayır, ama sana bir önerim var",
        "Evet, ama şu anda değil"
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
