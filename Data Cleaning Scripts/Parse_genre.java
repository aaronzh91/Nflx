import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.security.KeyStore.Entry;

public class Parse_genre {
	public static void main(String args[]) {
		try {
			FileInputStream process = new FileInputStream("C:\\Users\\Desktop\\keywords_new.csv");
			InputStreamReader isr = new InputStreamReader(process,"utf-8");
			BufferedReader br = new BufferedReader(isr);
			String readline = br.readLine();//skip the head
			File file_w = new File("C:\\Users\\Desktop\\keywords_Processed.csv");
			FileOutputStream fos  = new FileOutputStream(file_w);
			OutputStreamWriter os = new OutputStreamWriter(fos,"utf-8");
			BufferedWriter writer = new BufferedWriter(os);
			writer.write(readline);
			writer.newLine();
			//int count = 0;
			while((readline = br.readLine())!=null) {
				String[] array = readline.split(",");
				for(int i = 1;i<array.length;i++) {
					writer.write(array[0]+","+array[i]);
					writer.newLine();
				}
			}
			//System.out.println(count);
			writer.close();
			os.close();
			fos.close();
			br.close();
			isr.close();
			process.close();
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
