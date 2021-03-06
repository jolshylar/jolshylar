import Member from "./MemberCard";
import data from "../../data/members";
import "../../styles/MemberList.css";

function MemberList() {
  return (
    <>
      <h1 className="members--title" data-aos="fade-down">Our Members</h1>
      <div className="members-container">
        <div className="members-list">
          {data.map((member) => (
            <Member key={member.element} member={member} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MemberList;
