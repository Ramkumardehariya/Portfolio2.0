import React from 'react';
import './styles.css';
import { PinContainer } from "../../utiils/ui/3d-pin";
import leetcode from '../../assets/CodingProfiles/leetcode.png';
import gfg from '../../assets/CodingProfiles/gfg.png';
import cn from '../../assets/CodingProfiles/cn.svg';

export default function CodingProfiles() {
  return (
    <section className="coding-profiles-section" id="project">
      <h2>Coding Profiles</h2>
      <div className="profiles">
        <a href='https://leetcode.com/u/Ramkumar2002/' target='_blank'>
          <PinContainer
            title="leetcode.com/Ramkumar2002"
            href="https://leetcode.com/u/Ramkumar2002/"
          >
            <div className="profile-card flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem]">
              <img className="bg-white p-8 rounded-md h-40" src={leetcode} alt="LeetCode" />
              <h3 className="mt-8 font-bold text-2xl text-slate-100">
                Solved more than 1000 coding questions.
              </h3>
              <span className="profile-footer text-2xl text-white">
                <strong>@LeetCode: &nbsp; </strong> 
                <strong className="text-sky-300">Ramkumar2002</strong>
              </span>
            </div>
          </PinContainer>
        </a>

        <a href='https://www.geeksforgeeks.org/user/ramkumardehariya26/' target='_blank'>
          <PinContainer
            title="GFG/ramkumardehariya26"
            href="https://www.geeksforgeeks.org/user/ramkumardehariya26/"
          >
            <div className="profile-card flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem]">
              <img className="bg-white p-8 rounded-md h-40" src={gfg} alt="GeeksforGeeks" />
              <h3 className="mt-8 font-bold text-2xl text-slate-100">
                Solved more than 250 coding questions.
              </h3>
              <span className="profile-footer text-2xl text-white">
                <strong>@GFG: &nbsp; </strong> 
                <strong className="text-sky-300">ramkumardehariya26</strong>
              </span>
            </div>
          </PinContainer>
        </a>

        <a href='https://www.naukri.com/code360/profile/ramkumar123' target='_blank'>
          <PinContainer
            title="codingninja/ramkumar123"
            href="https://www.naukri.com/code360/profile/ramkumar123"
          >
            <div className="profile-card flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[40rem] h-[20rem]">
              <img className="bg-white p-8 rounded-md h-40" src={cn} alt="Coding Ninjas" />
              <h3 className="mt-8 font-bold text-2xl text-slate-100">
                Solved more than 300 coding questions.
              </h3>
              <span className="profile-footer text-2xl text-white">
                <strong>@Coding Studio: &nbsp; </strong> 
                <strong className="text-sky-300">ramkumar123</strong>
              </span>
            </div>
          </PinContainer>
        </a>
      </div>
    </section>
  );
}