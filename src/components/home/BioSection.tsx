import React from 'react';
import { Download, FileText } from 'lucide-react';

const BioSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Rising{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              POP STAR
            </span>
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-8
                       tracking-wider">
            BRUKLIN
          </h3>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                      backdrop-blur-sm rounded-2xl p-8 md:p-12 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-300
                      hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] mb-12">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center
                       font-light tracking-wide">
            At just 17, Bruklin is dominating the pop scene with a sound that's racked up{' '}
            <span className="text-red-400 font-semibold">14 million YouTube views</span> and{' '}
            <span className="text-green-400 font-semibold">6 million Spotify streams</span>... 
            Her music carries a raw, undeniable energy that pulls in fans from all over the world. 
            Teaming up with top producers like{' '}
            <span className="text-blue-400 font-semibold">Oak Felder</span> and{' '}
            <span className="text-cyan-400 font-semibold">Tommy Brown</span>, 
            Bruklin's got the talent and hustle to stand out—she's not just here to play, 
            she's rewriting the rules.
          </p>
        </div>

        {/* EPK Download Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                        backdrop-blur-sm rounded-2xl p-8 border border-white/10
                        hover:border-white/20 transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <FileText size={48} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Electronic Press Kit
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Download the complete press kit with high-resolution photos, bio, and music samples.
            </p>
            <a
              href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500
                       hover:from-blue-700 hover:to-cyan-600
                       text-white font-semibold py-3 px-6 rounded-xl
                       transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download EPK PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;