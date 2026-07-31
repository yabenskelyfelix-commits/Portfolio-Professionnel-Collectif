function MemberCard({ member, stats, statsLoading }) {
  return (
    <article className="card member-card">
      <img
        className="member-photo"
        src={member.photo}
        alt={`Photo de ${member.name}`}
        width={96}
        height={96}
      />
      <h3>{member.name}</h3>
      <p className="member-role">{member.role}</p>
      <p>{member.bio}</p>

      <div className="member-github">
        {statsLoading && <p>Chargement des statistiques GitHub...</p>}
        {!statsLoading && stats && (
          <ul className="member-github-stats">
            <li>Dépôts publics : {stats.public_repos}</li>
            <li>Abonnés : {stats.followers}</li>
          </ul>
        )}
        {!statsLoading && !stats && (
          <p className="member-github-error">Statistiques GitHub indisponibles.</p>
        )}
      </div>
    </article>
  );
}

export default MemberCard;
