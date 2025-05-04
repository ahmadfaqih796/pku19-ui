import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FolderOpen, Image, Info, Calendar } from "lucide-react";
const Home = () => {
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mui-blue to-mui-darkBlue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Kelas PKU MUI 19</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Platform berbagi materi kuliah, galeri kegiatan, dan informasi kelas untuk mahasiswa PKU MUI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-mui-blue hover:bg-mui-lightGray">
              
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-mui-blue/20">
              
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-mui-blue/10 rounded-full flex items-center justify-center mb-4">
                  <FolderOpen size={32} className="text-mui-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Repository File</h3>
                <p className="text-mui-darkGray">
                  Akses dan bagikan materi perkuliahan, PDF, video, dan makalah dengan mudah.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-mui-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Image size={32} className="text-mui-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Galeri Media</h3>
                <p className="text-mui-darkGray">
                  Lihat dan bagikan foto dan video kegiatan kelas dalam folder terorganisir.
                </p>
              </CardContent>
            </Card>
            
            {/* <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-mui-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Info size={32} className="text-mui-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2">Info Kelas</h3>
                <p className="text-mui-darkGray">
                  Informasi lengkap tentang kelas, ketua kelas, dan dosen pengajar.
                </p>
              </CardContent>
            </Card> */}
          
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-mui-lightGray">
        <div className="container mx-auto px-4 text-center">
          
          
          <Button asChild size="lg" className="bg-mui-blue hover:bg-mui-darkBlue">
            
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;