import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

public class Main {

    public static void main(String[] args) {

        String csvFile = "/Users/landonchow/Downloads/Kaggle.csv";
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";		
        
        try {

            br = new BufferedReader(new FileReader(csvFile));
            PrintWriter writer = new PrintWriter("KaggleTable.txt", "UTF-8");
            
            writer.println("CREATE TABLE Kaggle (\n" + "    IMDB_ID datatype,\n"
            		+ "    id String,\n" + "     overview String,\n" + "    poster_path String,\n" + "    title String,\n);\n\n");

            while ((line = br.readLine()) != null) {

                // use comma as separator
                
                String[] movie = line.split(",(?=(?:[^\\\"]*\\\"[^\\\"]*\\\")*[^\\\"]*$)");

                writer.println( "INSERT INTO Kaggle (IMDB_ID, id, overview, poster_path, title)"
                		+ "\n" + "VALUES('" + movie[0] + "', '" + movie[1] + "', '" + movie[2]
                		+ "', '" + movie[3] + "', '" + movie[4] + "')\n\n");
            }
            writer.close();

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }

}