type ErrorState = {
    isActive: boolean;
    errCode: string;
    errMsg: string;
  }
  

  type  ApiResponse = {
    results: Image[];
    total_pages: number;
  }
 type AppProps = {}


 interface Image {
  id: string;
  url: string;
  alt_description: string;}