// "use client";

// import { useEffect, useState } from 'react';
// import { ActivityCalendar } from 'react-activity-calendar';

// export default function LeetCodeStats() {
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [mounted, setMounted] = useState(false);
  
//   // 1. SET YOUR USERNAME HERE
//   const leetcodeUsername = "DvoBUgbxDl"; 

//   const theme = {
//     light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'], // GitHub Green style
//     dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
//   };

//   useEffect(() => {
//     setMounted(true);
//     async function fetchLeetCodeData() {
//       try {
//         const response = await fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/calendar`);
//         const result = await response.json();
        
//         if (result && result.submissionCalendar) {
//           const calendarData = JSON.parse(result.submissionCalendar);
//           const submissionMap = new Map();

//           // Convert Unix timestamps to YYYY-MM-DD
//           Object.entries(calendarData).forEach(([timestamp, count]) => {
//             const date = new Date(parseInt(timestamp) * 1000);
//             const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
//             submissionMap.set(dateStr, count);
//           });

//           const fullYearData = [];
//           const now = new Date();
          
//           // Generate 365 days of blocks
//           for (let i = 364; i >= 0; i--) {
//             const d = new Date();
//             d.setDate(now.getDate() - i);
//             const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            
//             const count = submissionMap.get(dateStr) || 0;
//             const level = count >= 10 ? 4 : count >= 5 ? 3 : count >= 3 ? 2 : count >= 1 ? 1 : 0;
            
//             fullYearData.push({ date: dateStr, count, level });
//           }
//           setData(fullYearData);
//         }
//       } catch (error) {
//         console.error("Error fetching LeetCode:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchLeetCodeData();
//   }, [leetcodeUsername]);

//   // Prevent SSR mismatch
//   if (!mounted) return <div className="h-[200px] w-full bg-gray-50 animate-pulse rounded-xl" />;

//   return (
//     <div className="w-full max-w-5xl mx-auto p-6 border rounded-xl bg-white shadow-sm">
//       <h2 className="text-lg font-bold mb-4">LeetCode Submissions</h2>
      
//       {loading ? (
//         <div className="h-[150px] flex items-center justify-center text-gray-400 italic">Syncing with LeetCode...</div>
//       ) : (
//         <div className="overflow-x-auto">
//           {/* min-w ensures the 52 weeks aren't squashed on small screens */}
//           <div className="min-w-[800px]">
//             <ActivityCalendar 
//               data={data}
//               theme={theme}
//               colorScheme="light"
//               blockSize={12}
//               blockMargin={4}
//               fontSize={12}
//             />
//           </div>
//         </div>
//       )}
      
//       <div className="mt-4 text-xs text-gray-500 border-t pt-4 flex justify-between">
//         <span>@{leetcodeUsername}</span>
//         <div className="flex gap-1 items-center">
//           <span>Less</span>
//           {theme.light.map(c => <div key={c} className="w-3 h-3 rounded-sm" style={{backgroundColor: c}} />)}
//           <span>More</span>
//         </div>
//       </div>
//     </div>
//   );
// }