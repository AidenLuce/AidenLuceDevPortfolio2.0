module com.example.aidenlucedevportfolio {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.aidenlucedevportfolio to javafx.fxml;
    exports com.example.aidenlucedevportfolio;
}