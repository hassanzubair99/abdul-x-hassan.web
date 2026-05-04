/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Footer } from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="bg-black text-white font-body selection:bg-white/20">
      <Navbar />
      <Hero />
      <Capabilities />
      <Footer />
    </main>
  );
}

