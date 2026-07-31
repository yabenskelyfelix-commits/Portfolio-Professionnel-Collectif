import { useEffect, useState } from "react";
import { teamMembers } from "../data/team.js";
import MemberCard from "../components/team/MemberCard.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

function Team() {
  const { t } = useLanguage();
  const [githubStats, setGithubStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    async function fetchAllStats() {
      const entries = await Promise.all(
        teamMembers.map(async (member) => {
          try {
            const response = await fetch(`https://api.github.com/users/${member.github}`);
            if (!response.ok) throw new Error("Réponse GitHub invalide");
            const data = await response.json();
            return [member.id, data];
          } catch (error) {
            return [member.id, null];
          }
        })
      );

      if (!isCancelled) {
        setGithubStats(Object.fromEntries(entries));
        setLoading(false);
      }
    }

    fetchAllStats();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section>
      <h1>{t("team.title")}</h1>
      <div className="card-grid">
        {teamMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            stats={githubStats[member.id]}
            statsLoading={loading}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
